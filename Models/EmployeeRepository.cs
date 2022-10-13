using Microsoft.EntityFrameworkCore;

namespace API_Angular.Models
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly PersonalRegistationDbContext _context;

        public EmployeeRepository(PersonalRegistationDbContext context)
        {
            _context = context;
        }




        public void AddNewEmployee(Employee employee)
        {
            _context.Employees.Add(employee);
            _context.SaveChanges();
        }

        public void DeleteEmployee(int id)
        {
            Employee employeeToDelete = _context.Employees.FirstOrDefault(e => e.EmployeeId == id);   
            _context.Employees.Remove(employeeToDelete);
            _context.SaveChanges();
        }

        public IEnumerable<Employee> GetAllEmployees()
        {
            return _context.Employees.Include(e => e.Department).ToList();
        }

        public Employee GetEmployeeByID(int id)
        {
            return _context.Employees.Find(id);
        }

        public void UpdateEmployee(int id, Employee employee)
        {
            var employeeToUpdate = _context.Employees.FirstOrDefault(e => e.EmployeeId == id);

            if (employeeToUpdate != null)
            {
                employeeToUpdate.FirstName = employee.FirstName;
                employeeToUpdate.LastName = employee.LastName;
                employeeToUpdate.Address = employee.Address;
                employeeToUpdate.City = employee.City;
                employeeToUpdate.Email = employee.Email;
                employeeToUpdate.Gender = employee.Gender;
                employeeToUpdate.PhoneNumber = employee.PhoneNumber;
                employeeToUpdate.Salary = employee.Salary;
                employeeToUpdate.DepartmentId = employee.DepartmentId;
                _context.SaveChanges();
            }

        }
    }
}
