import { Op } from "sequelize";
import Launch from "../database/models/LaunchsModels";
import LaunchpadService from "./LaunchpadsService";

class LaunchService {

  public async getAllLaunchs(): Promise<Launch[]> {
    const launches = await Launch.findAll();
    return launches;
  }

  public async getLaunchById(id: string): Promise<Launch | null> {
    const launch = await Launch.findByPk(id);
      return launch;
  }

  public async getRocketPending (): Promise<Launch | null> {
    const launchs = await Launch.findAll({
      where: {
        upcoming: true,
      },
      order: [['dateUnix', 'ASC']],
      limit: 1,
      })
      return launchs[0];
  }
  
  public  async getRocketsSuccess (): Promise<Launch[] | null> {
    
    const launchs = await Launch.findAll({
      where: {
        success: true,
      },
      order: [['dateUnix', 'ASC']],
      })
      return launchs;
    }

    public async getRocketsFailure (): Promise<Launch[] | null> {
      const launchs = await Launch.findAll({
        where: {
          success: false,
        },
        order: [['dateUnix', 'ASC']],
        })
        return launchs;
    }

    public async getLaunchsByCapsuleId(capsuleId: string): Promise<Launch[] | null> {
      try {
        const launchs = await Launch.findAll({
          where: {
            capsules: {
              [Op.like]: [`%${capsuleId}%`],
            },
          },
          order: [['dateUnix', 'ASC']],
        });
        return launchs || null;
      } catch (error) {
        console.error('Error in getLaunchsByCapsuleId:', error);
        return null;
      }
    }
    
    public async getLaunchsByPayloadId(payloadId: string): Promise<Launch[] | null> {
      try {
        const launchs = await Launch.findAll({
          where: {
            payloads: {
              [Op.like]: [`%${payloadId}%`],
            },
          },
          order: [['dateUnix', 'ASC']],
        });
        return launchs || null;
      } catch (error) {
        console.error('Error in getLaunchsByPayloadId:', error);
        return null;
      }
    }
    
    public async getLaunchsByLaunchpadId(launchpadId: string): Promise<Launch[] | null> {
      try {
        const launchs = await Launch.findAll({
          where: {
            launchpad: {
              [Op.like]: `%${launchpadId}%`,
          },
        },
          order: [['dateUnix', 'ASC']],
        });
        return launchs || null;
      } catch (error) {
        console.error('Error in getLaunchsByLaunchpadId:', error);
        return null;
      }
    }

    public async getLaunchesByRocketId(rocketId: string): Promise<Launch[] | null> {
      try {
        const launchs = await Launch.findAll({
          where: {
            rocket: {
              [Op.like]: `%${rocketId}%`,
          },
        },
          order: [['dateUnix', 'ASC']],
        });
        return launchs || null;
      }
      catch (error) {
        console.error('Error in getLaunchesByRocketId:', error);
        return null;
      }
    }

    
    public async getLaunchsByLaunchpadName(launchpadName: string): Promise<Launch[] | null> {
      try {
        console.log(launchpadName);
        const launchpadService = new LaunchpadService();
        const launchpads = await launchpadService.getLaunchpadByName(launchpadName);
    
        if (!launchpads || launchpads.length === 0) {
          return null;
        }
    
        const launchpadIds = launchpads.map((launchpad) => launchpad.id);
        const launchs: (Launch[] | null)[] = await Promise.all(
          launchpadIds.map((launchpadId) => this.getLaunchsByLaunchpadId(launchpadId))
        );
        return launchs.flat().filter((launch) => launch !== null) as Launch[] || null;
      } catch (error) {
        console.error('Error in getLaunchsByLaunchpadName:', error);
        return null;
      }
    }
    
    public async getLaunchesByCoreId(coreId: string): Promise<Launch[] | null> {
      try {
        const launches = await Launch.findAll();
        const filteredLaunches = launches.filter((launch) =>
          launch.cores.find((core) => core.core === coreId)
        );
        return filteredLaunches || null;
      } catch (error) {
        console.error('Error in getLaunchesByCoreId:', error);
        return null;
      }
    }
    

    public async getLaunchesByTimePeriod(startYear: number, endYear: number): Promise<Launch[] | null> {
      const launches = await Launch.findAll();
    
      const filteredLaunches = launches.filter((launch) => {
        const launchYear = new Date(launch.dateUnix * 1000).getFullYear();
        return launchYear >= startYear && launchYear <= endYear;
      });
    
      return filteredLaunches;
    }


    
    
    
  }    

export default LaunchService;
