using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoodEaterRecipes.Services
{
    public class EmptyMailService : IMailService
    {
        private readonly ILogger<EmptyMailService> _logger;

        public EmptyMailService(ILogger<EmptyMailService> logger)
        {
            _logger = logger;
        }

        public void SendMessage(string to, string subject, string body)
        {
            _logger.LogInformation($"To: {to} Subject: {subject} Body: {body}");
        }
    }
}
