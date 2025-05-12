using Events.DataLayer.Data;
using Events.DataLayer.Models;
using Microsoft.EntityFrameworkCore;

namespace Events.BusinessLayer
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class, IDatabaseModel
    {

        private AppDbContext _dbContext;

        public GenericRepository(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<T>> GetAll()
        {
            return await _dbContext.Set<T>().ToListAsync();
        }
    }
}
