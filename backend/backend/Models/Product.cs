using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace backend.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string ImagePath { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string Category { get; set; }
        public string Brand { get; set; }
        [Required]
        public float Price { get; set; }
        [Required]
        [Range(1, 5)]
        public int Rating { get; set; } 

    }
}
