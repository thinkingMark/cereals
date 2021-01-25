using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cereals.Models
{
    public class RequestData
    {
        public int deliveryType { get; set; }
        public int filialId { get; set; }
        public int From { get; set; }
        public int businessId { get; set; }
        public int To { get; set; }
        public string customFilter { get; set; }
        public Object RangeFilters { get; set; }
        public Object MultiFilters { get; set; }
        public List<object> UniversalFilters { get; set; }
        public List<object> CategoryFilter { get; set; }
        public List<object> Promos { get; set; }
    }
}
