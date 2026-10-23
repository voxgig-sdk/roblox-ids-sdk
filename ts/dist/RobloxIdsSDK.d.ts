import { DecalEntity } from './entity/DecalEntity';
import { SongEntity } from './entity/SongEntity';
export type * from './RobloxIdsTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { RobloxIdsEntityBase } from './RobloxIdsEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class RobloxIdsSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Decal(entopts?: Record<string, any>): DecalEntity;
    Song(entopts?: Record<string, any>): SongEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): RobloxIdsSDK;
    tester(testopts?: any, sdkopts?: any): RobloxIdsSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof RobloxIdsSDK;
export { stdutil, config, BaseFeature, RobloxIdsEntityBase, RobloxIdsSDK, SDK, };
export type { DirectResult };
