

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { RobloxIdsSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('SongEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when ROBLOX_IDS_TEST_LIVE=TRUE.
  afterEach(liveDelay('ROBLOX_IDS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = RobloxIdsSDK.test()
    const ent = testsdk.Song()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('song hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of RobloxIdsSDK.test(offline).Song().stream('list')) { }
    }, /offline/)

    for await (const _item of RobloxIdsSDK.test(offline).Song()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = RobloxIdsSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.Song().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of RobloxIdsSDK.test().Song().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new RobloxIdsSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.Song().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.Song().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = RobloxIdsSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Song().list({"genre":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.ROBLOX_IDS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'song.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"artist":{"a":true,"h":"Artist","n":"artist","r":false,"t":"`$STRING`","key$":"artist","index$":0},"durationSec":{"a":true,"h":"Duration Sec","n":"durationSec","r":false,"t":"`$INTEGER`","key$":"durationSec","index$":1},"genre":{"a":true,"h":"Genre","n":"genre","r":false,"t":"`$STRING`","key$":"genre","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":3},"isWorking":{"a":true,"h":"Is Working","n":"isWorking","r":false,"t":"`$BOOLEAN`","key$":"isWorking","index$":4},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":5},"upVotes":{"a":true,"h":"Up Votes","n":"upVotes","r":false,"t":"`$INTEGER`","key$":"upVotes","index$":6},"url":{"a":true,"h":"Url","n":"url","r":false,"t":"`$STRING`","key$":"url","index$":7},"verifiedAt":{"a":true,"fo":"date-time","h":"Verified At","n":"verifiedAt","r":false,"t":"`$STRING`","key$":"verifiedAt","index$":8}},"id":{"field":"id","name":"id"},"name":"song","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /songs","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"genre","or":"genre","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"q","or":"q","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"working","or":"working","r":false,"t":"`$BOOLEAN`","index$":3}]},"k":"http","m":"GET","o":"/songs","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"songs"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"song","name__orig":"song","Name":"Song","name_":"song","name-":"song","NAME":"SONG","index$":1}, {"active":true,"entity":"song","key$":"BasicSongFlow","kind":"basic","name":"BasicSongFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"song_ref01"}}],"index$":0}]}, 'Song', {"GET /songs":{"protocol":"http","parameters":[{"name":"q","in":"query","required":false,"description":"Search by song name.","schema":{"type":"string"},"index$":0},{"name":"genre","in":"query","required":false,"description":"Filter by genre, e.g. `pop`, `phonk`.","schema":{"type":"string"},"index$":1},{"name":"working","in":"query","required":false,"description":"Set false to include IDs that have not been verified as working.","schema":{"type":"boolean"},"index$":2},{"name":"limit","in":"query","required":false,"description":"Results per page. Upstream maximum is 100.","schema":{"type":"integer","maximum":100},"index$":3}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let song_ref01_data = Object.values(setup.data.existing.song)[0] as any

    // LIST
    const song_ref01_ent = client.Song()
    const song_ref01_match: any = {}

    const song_ref01_list = (await song_ref01_ent.list(song_ref01_match)).map((e: any) => e.data())


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/song/SongTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = RobloxIdsSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['song01','song02','song03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'ROBLOX_IDS_TEST_SONG_ENTID': idmap,
    'ROBLOX_IDS_TEST_LIVE': 'FALSE',
    'ROBLOX_IDS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['ROBLOX_IDS_TEST_SONG_ENTID']

  const live = 'TRUE' === env.ROBLOX_IDS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['ROBLOX_IDS_TEST_SONG_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new RobloxIdsSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.ROBLOX_IDS_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
