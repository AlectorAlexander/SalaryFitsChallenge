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
    
    
    
    
    public async getLaunchsByPayloadId(payloadId: string[]): Promise<Launch[] | null> {
      const launchs = await Launch.findAll({
        where: {
          payloads: {
            [Op.contains]: payloadId,
          },
        },
        order: [['dateUnix', 'ASC']],
      });
    
      return launchs;
    }

    public async getLaunchsByLaunchpadId(launchpadIds: string[]): Promise<Launch[] | null> {
      const launchs = await Launch.findAll({
        where: {
          launchpad: launchpadIds,
        },
        order: [['dateUnix', 'ASC']],
      });
    
      return launchs;
    }
    
    public async getLaunchsByLaunchpadName(launchpadName: string): Promise<Launch[] | null> {
      const launchpadService = new LaunchpadService();
      const launchpads = await launchpadService.getLaunchpadByName(launchpadName);
    
      if (!launchpads || launchpads.length === 0) {
        return null;
      }
    
      const launchpadIds = launchpads.map((launchpad) => launchpad.id);
      const launchs = await this.getLaunchsByLaunchpadId(launchpadIds);
      return launchs;
    }

    public async getLaunchesByCoreId(coreId: string): Promise<Launch[] | null> {
      const launches = await Launch.findAll();
    
      const filteredLaunches = launches.filter((launch) =>
        launch.cores.find((core) => core.core === coreId)
      );
    
      return filteredLaunches;
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
