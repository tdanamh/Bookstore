using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bookstore.Models
{
    public class BookstoreDatabaseSettings : IBookstoreDatabaseSettings
    {
        public string BooksCollectionName { get; set; }
        public string UsersCollectionName { get; set; } 
        public string DiscountsCollectionName { get; set; }
        public string OrdersCollectionName { get; set; }
        public string AuthorsCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IBookstoreDatabaseSettings
    {
        string BooksCollectionName { get; set; }
        string UsersCollectionName { get; set; }
        string DiscountsCollectionName { get; set; }
        string OrdersCollectionName { get; set; }
        string AuthorsCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
