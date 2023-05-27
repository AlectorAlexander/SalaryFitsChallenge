import Cores from "../database/models/CoresModels";

class CoresService {

  public async getAllCores(): Promise<Cores[]> {
    const cores = await Cores.findAll();
    return cores;
  }

  public async getCoreById(id: string): Promise<Cores | null> {
    const core = await Cores.findByPk(id);
    return core;
  }

  public async getCoresByTimesUsed(): Promise<Cores[] | null> {
    try {
      return await Cores.findAll({
        order: [['reuse_count', 'DESC']],
      });
    } catch (error) {
      console.error('Error in getCoresByTimesUsed:', error);
      return null;
    }
  
  }

  public async getLaunchesByRtlsLandings(): Promise<Cores[] | null> {
    try {
      return await Cores.findAll({
        order: [['rtls_landings', 'DESC']],
      });
    } catch (error) {
      console.error('Error in getLaunchesByRtlsLandings:', error);
      return null;
    }
  } 

  public async getLaunchesByAsdsAttempts(): Promise<Cores[] | null> {
    try {
      return await Cores.findAll({
        order: [['asds_attempts', 'DESC']],
      });
    } catch (error) {
      console.error('Error in getLaunchesByAsdsAttempts:', error);
      return null;
    }
  }

  public async getLaunchesByAsdsLandings(): Promise<Cores[] | null> {
    try {
      return await Cores.findAll({
        order: [['asds_landings', 'DESC']],
      });
    } catch (error) {
      console.error('Error in getLaunchesByAsdsLandings:', error);
      return null;
    }
  }
  
  
  

}

export default CoresService;
