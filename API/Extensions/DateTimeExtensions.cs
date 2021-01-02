using System;

namespace API.Extensions
{
    public static class DateTimeExtensions
    {
        public static int CalculateAge(this DateTime bob)
        {
            var today = DateTime.Today;
            var age = today.Year - bob.Year;

            if(bob.Date > today.AddDays(-age)) age--;
            
            return age;
        }
    }
}