import { RobloxIdsEntityBase } from '../RobloxIdsEntityBase';
import type { RobloxIdsSDK } from '../RobloxIdsSDK';
import type { Control } from '../types';
import type { Decal, DecalListMatch } from '../RobloxIdsTypes';
declare class DecalEntity extends RobloxIdsEntityBase<Decal> {
    constructor(client: RobloxIdsSDK, entopts: any);
    make(this: DecalEntity): DecalEntity;
    list(this: any, reqmatch?: DecalListMatch, ctrl?: Control): Promise<DecalEntity[]>;
}
export { DecalEntity };
