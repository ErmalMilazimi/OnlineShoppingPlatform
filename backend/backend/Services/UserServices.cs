using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Services
{
    public class UserServices : iUserServices
    {
        private AppDbContext _context;
        public UserServices(AppDbContext context)
        {
            _context = context;
        }

        public User CreateUser(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();

            return user;
        }

        public void DeleteUser(int id)
        {
            var user = _context.Users.First(u => u.Id == id);
            _context.Users.Remove(user);
            _context.SaveChanges();
        }

        public List<User> getUsers()
        {
            return _context.Users.ToList();
        }

        public User getByEmail(string email)
        {
            return _context.Users.FirstOrDefault(u => u.Email == email);
        }

        public User getById(int id)
        {
            return _context.Users.FirstOrDefault(u => u.Id == id);
        }
    }
}
