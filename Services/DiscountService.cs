using Bookstore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Driver;

namespace Bookstore.Services
{
    public class DiscountService
    {
        private readonly IMongoCollection<Discount> _discounts;
        
        public DiscountService(IBookstoreDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _discounts = database.GetCollection<Discount>(settings.DiscountsCollectionName);
        }

        public List<Discount> Get() =>
            _discounts.Find(discount => true).ToList();

        public Discount Get(string id) =>
            _discounts.Find<Discount>(discount => discount.Id == id).FirstOrDefault();

        public Discount Create(Discount discount)
        {
            _discounts.InsertOne(discount);
            return discount;
        }

        public void Update(string id, Discount discountIn) =>
           _discounts.ReplaceOne(discount => discount.Id == id, discountIn);

        public void Remove(Discount discountIn) =>
            _discounts.DeleteOne(discount => discount.Id == discountIn.Id);

        public void Remove(string id) =>
            _discounts.DeleteOne(discount => discount.Id == id);

    }
}