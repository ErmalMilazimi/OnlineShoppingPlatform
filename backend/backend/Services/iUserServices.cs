using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Services
{
    public interface iUserServices
    {
        User CreateUser(User user);
        List<User> getUsers();
        User getByEmail(string email);
    }
}
