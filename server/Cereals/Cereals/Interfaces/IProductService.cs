using Cereals.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cereals.Interfaces
{
    public interface IProductService
    {
        public Task<IEnumerable<Product>> GetData(string request);
    }
}
