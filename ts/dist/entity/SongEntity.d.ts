import { RobloxIdsEntityBase } from '../RobloxIdsEntityBase';
import type { RobloxIdsSDK } from '../RobloxIdsSDK';
import type { Control } from '../types';
import type { Song, SongListMatch } from '../RobloxIdsTypes';
declare class SongEntity extends RobloxIdsEntityBase<Song> {
    constructor(client: RobloxIdsSDK, entopts: any);
    make(this: SongEntity): SongEntity;
    list(this: any, reqmatch?: SongListMatch, ctrl?: Control): Promise<SongEntity[]>;
}
export { SongEntity };
