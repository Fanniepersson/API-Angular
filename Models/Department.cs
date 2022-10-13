using System.ComponentModel.DataAnnotations;

namespace API_Angular.Models
{
    public class Department
    {
        [Key]
        public int DepartmentId { get; set; }
        public string DepartmentName { get; set; }

     
    }
}
