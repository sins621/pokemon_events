using Events.DataLayer.Models;

namespace Events.BusinessLayer
{
    public interface IGenericRepository<T>: IScoped where T : IDatabaseModel
    {
        public Task<IEnumerable<T>> GetAll();
    }
}
