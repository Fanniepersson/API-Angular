namespace API_Angular.Models
{
    public interface IEmployeeRepository
    {
        void AddNewEmployee(Employee employee);
        IEnumerable<Employee> GetAllEmployees();
        Employee GetEmployeeByID(int id);
        void UpdateEmployee(int id, Employee employee);
        void DeleteEmployee(int id);
    }
}
