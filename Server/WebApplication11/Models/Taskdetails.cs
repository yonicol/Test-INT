using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication11.Models
{
    public class Taskdetails
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [Column(TypeName = "text")]
        public string Tasktitle { get; set; }
        [Required]
        [Column(TypeName = "text")]
        public string Taskdescription { get; set; }
        [Required]
        [Column(TypeName = "text")]
        public string Taskdate { get; set; }
    }
}