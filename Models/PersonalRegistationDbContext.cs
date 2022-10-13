using Microsoft.EntityFrameworkCore;

namespace API_Angular.Models
{
    public class PersonalRegistationDbContext :DbContext
    {

        public PersonalRegistationDbContext(DbContextOptions options) :base(options)
        {

        }

        public DbSet<Employee> Employees { get; set; }
        public DbSet<Department> Departments { get; set; }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Department>().HasData(new Department
            {
                DepartmentId = 1,
                DepartmentName = "IT"
            });
            modelBuilder.Entity<Department>().HasData(new Department
            {
                DepartmentId = 2,
                DepartmentName = "Economy"
            });
            modelBuilder.Entity<Department>().HasData(new Department
            {
                DepartmentId = 3,
                DepartmentName = "Management"
            });

        }







    }
}
