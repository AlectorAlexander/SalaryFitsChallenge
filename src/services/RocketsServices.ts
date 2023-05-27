import { Op } from "sequelize";
import Rocket from "../database/models/RocketsModels";
import LaunchService from "./LaunchServices";

class RocketsService {

  public async getAllRockets(): Promise<Rocket[]> {
    const rockets = await Rocket.findAll();
    return rockets;
  }

  public async getRocketById(id: string): Promise<Rocket | null> {
    const rocket = await Rocket.findByPk(id);
    return rocket;
  }

  public async getRocketByName(name: string): Promise<Rocket[] | null> {
    try {
      const rockets = await Rocket.findAll({
        where: {
          name: {
            [Op.like]: `%${name}%`
          }
        }
      });
  
      return rockets.length > 0 ? rockets : null;
    } catch (error) {
      console.error(`Error retrieving rockets by name: ${error}`);
      return null;
    }
  }
  
  

  public async getRocketByCompany(company: string): Promise<Rocket[] | null> {
    try {
      const rockets = await Rocket.findAll({
        where: {
          company: {
            [Op.like]: `%${company}%`
          }
        }
      });
  
      return rockets.length > 0 ? rockets : null;
    } catch (error) {
      console.error(`Error retrieving rockets by company: ${error}`);
      return null;
    }
  }

  public async getRocketByCountry(country: string): Promise<Rocket[] | null> {
    try {
      const rockets = await Rocket.findAll({
        where: {
          country: {
            [Op.like]: `%${country}%`
          }
        }
      });
  
      return rockets.length > 0 ? rockets : null;
    } catch (error) {
      console.error(`Error retrieving rockets by country: ${error}`);
      return null;
    }
  }


  public async getRocketPending(): Promise<Rocket | null> {
  try {
    const launchService = new LaunchService();
    const launch = await launchService.getRocketPending();

    if (!launch) {
      return null;
    }

    const rocket = await Rocket.findByPk(launch.rocket);
    return rocket;
  } catch (error) {
    console.error(`Error retrieving pending rocket: ${error}`);
    return null;
  }
}


  public  async getRocketsSuccess (): Promise<Rocket[] | null> {
    const launchService = new LaunchService()
    const launch = await launchService.getRocketsSuccess()
    if (!launch || launch.length === 0) {
      return null
  }
    const rockets = await Rocket.findAll({
      where: {
        id: launch.map(launch => launch.rocket)
      }
    })
    return rockets
}

public async getRocketsFailure (): Promise<Rocket[] | null> {
  const launchService = new LaunchService()
  const launch = await launchService.getRocketsFailure()
  if (!launch) {
    return null
  }
  const rockets = await Rocket.findAll({
    where: {
      id: launch.map(launch => launch.rocket)
    }})
    return rockets
  }

  public async getActiveRocket(): Promise<Rocket[] | null> {
    try {
      console.log('chama');
      
      const rockets = await Rocket.findAll({
        where: {
          active: true,
        },
      });
  
      return rockets;
    } catch (error) {
      console.error('Error in getActiveRocket:', error);
      return null;
    }
  }
  
  public async getFalconRockets(): Promise<Rocket[] | null> {
    try {
      const rockets = await Rocket.findAll({
        where: {
          type: 'rocket',
          name: {
            [Op.like]: '%Falcon%',
          },
        },
      });
  
      return rockets;
    } catch (error) {
      console.error('Error in getFalconRockets:', error);
      return null;
    }
  }

  public async getHighSuccessRateRockets(): Promise<Rocket[] | null> {
    try {
      const rockets = await Rocket.findAll({
        where: {
          success_rate_pct: {
            [Op.gt]: 90,
          },
        },
      });
  
      return rockets;
    } catch (error) {
      console.error('Error in getHighSuccessRateRockets:', error);
      return null;
    }
  }
  
  public async getRocketsWithImages(): Promise<Rocket[] | null> {
    try {
      const rockets = await Rocket.findAll({
        where: {
          flickr_images: {
            [Op.not]: null,
          },
        },
      });
  
      return rockets;
    } catch (error) {
      console.error('Error in getRocketsWithImages:', error);
      return null;
    }
  }
  
  public async getRocketsLaunchedAfterDate(date: string): Promise<Rocket[] | null> {
    try {
      const rockets = await Rocket.findAll({
        where: {
          first_flight: {
            [Op.gt]: date,
          },
        },
      });
  
      return rockets;
    } catch (error) {
      console.error('Error in getRocketsLaunchedAfterDate:', error);
      return null;
    }
  }
  

}
export default RocketsService;
