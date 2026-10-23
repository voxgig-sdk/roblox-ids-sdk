
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'RobloxIds',
        slug: "roblox-ids",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "now": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://rblxdb.com/api/v1",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        decal: {
        },
  
        song: {
        },
  
    }
  }


  entity = {
    "decal": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`"
        },
        {
          "name": "themes",
          "title": "Themes",
          "type": "`$ARRAY`"
        },
        {
          "name": "thumbnailUrl",
          "title": "Thumbnail Url",
          "type": "`$STRING`"
        },
        {
          "name": "upVotes",
          "title": "Up Votes",
          "type": "`$INTEGER`"
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "decal",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/decals",
              "segments": [
                {
                  "lit": "decals"
                }
              ],
              "parts": [
                "decals"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "theme",
                    "orig": "theme",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "song": {
      "fields": [
        {
          "name": "artist",
          "title": "Artist",
          "type": "`$STRING`"
        },
        {
          "name": "durationSec",
          "title": "Duration Sec",
          "type": "`$INTEGER`"
        },
        {
          "name": "genre",
          "title": "Genre",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "isWorking",
          "title": "Is Working",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`"
        },
        {
          "name": "upVotes",
          "title": "Up Votes",
          "type": "`$INTEGER`"
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`"
        },
        {
          "name": "verifiedAt",
          "title": "Verified At",
          "type": "`$STRING`",
          "format": "date-time"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "song",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/songs",
              "segments": [
                {
                  "lit": "songs"
                }
              ],
              "parts": [
                "songs"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "genre",
                    "orig": "genre",
                    "type": "`$STRING`",
                    "kind": "query",
                    "field": true
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "working",
                    "orig": "working",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  }
                ]
              },
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

