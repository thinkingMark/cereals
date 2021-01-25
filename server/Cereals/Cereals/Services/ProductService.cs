using Cereals.Interfaces;
using Cereals.Models;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Mail;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Text;

namespace Cereals.Services
{
    public class ProductService : IProductService
    {
        private readonly Urls urls;
        private readonly Root request;

        public ProductService(IOptions<Urls> options, IOptions<Root> req)
        {
            urls = options.Value;
            request = req.Value;
        }
        public async Task<IEnumerable<Product>> GetData(string request)
        {
            using(var client = new HttpClient())
            {
                var data = await client.GetAsync(urls.AshanUrl + request);
                var josn = JObject.Parse(data.Content.ReadAsStringAsync().GetAwaiter().GetResult());
                var goods = josn["results"].ToArray().Take(5).Select(x =>
                {
                    return new Product
                    {
                        Name = x["title"].ToString(),
                        ProductLink = x["web_url"].ToString(),
                        Price = (int)x["price"],
                        Image = x["img"]["s1350x1350"].ToString()
                    };
                }).ToList();
                data = await client.GetAsync(urls.RozetkaUrl + request);
                josn = JObject.Parse(data.Content.ReadAsStringAsync().GetAwaiter().GetResult());
                goods.AddRange(josn["data"]["goods"].ToArray().Take(5).Select(x =>
                {
                    return new Product
                    {
                        Name = x["title"].ToString(),
                        ProductLink = x["href"].ToString(),
                        Price = (int)x["price"],
                        Image = x["image_main"].ToString()
                    };
                }).ToList());
                data = await client.PostAsync(urls.SilpoUrl + request, new StringContent(JsonConvert.SerializeObject(request), Encoding.UTF8, "application/json"));
                josn = JObject.Parse(data.Content.ReadAsStringAsync().GetAwaiter().GetResult());
                goods.AddRange(josn["data"]["goods"].ToArray().Take(5).Select(x =>
                {
                    return new Product
                    {
                        Name = x["name"].ToString(),
                        ProductLink = urls.SolpoDetailsUrls + x["id"].ToString(),
                        Price = (int)x["price"],
                        Image = x["mainImage"].ToString()
                    };
                }).ToList());

                return goods;
            }
        }
    }
}
