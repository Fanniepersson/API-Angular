using API_Angular.Models;
using Microsoft.AspNetCore.Mvc;

namespace API_Angular.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class EmployeeController : Controller
    {
        private readonly IEmployeeRepository _employee;

        public EmployeeController(IEmployeeRepository employee)
        {
            this._employee = employee;
        }

        //Get all employee
        [HttpGet]
        public IActionResult GetAllEmployees()
        {
            var employees = _employee.GetAllEmployees();
            return Ok(employees);
        }

        //Get single employee
        [HttpGet]
        [Route("id")]
        [ActionName("GetSingleEmployee")]
        public IActionResult GetSingleEmployee(int id)
        {
            var employee = _employee.GetEmployeeByID(id);
            return Ok(employee);
        }

        //Create employee
        [HttpPost]
        public IActionResult CreateEmployee(Employee employee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            _employee.AddNewEmployee(employee);
            return CreatedAtAction(nameof(GetSingleEmployee), new { id = employee.EmployeeId }, employee);
        }

        //Update employee
        [HttpPut]
        [Route("{id:int}")]
        public IActionResult UpdateEmployee(int id, Employee employee)
        {
            if (id != 0)
            {
                _employee.UpdateEmployee(id, employee);
                return Ok(employee);
            }

            return NotFound("Employee not found");
        }

        //Delete employee
        [HttpDelete]
        [Route("{id:int}")]
        public IActionResult DeleteEmployee(int id)
        {
            if (id != 0)
            {
                _employee.DeleteEmployee(id);
                return Ok();
            }

            return NotFound("Employee not found");
           

        }
    }
}
