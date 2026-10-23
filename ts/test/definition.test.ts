import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "decal",
    "accessor": "Decal",
    "op": "list",
    "method": "GET",
    "path": "/decals",
    "args": [],
    "select": {
      "limit": "v1",
      "q": "v1",
      "theme": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "q",
      "theme",
      "limit"
    ],
    "queryArgs": [
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "q",
        "wire": "q"
      },
      {
        "name": "theme",
        "wire": "theme"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "count": 1,
      "source": "x",
      "attribution": {
        "text": "x",
        "url": "x",
        "html": "x"
      },
      "decals": [
        {
          "id": "x",
          "name": "x",
          "themes": [
            "x"
          ],
          "upVotes": 1,
          "thumbnailUrl": "x",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "song",
    "accessor": "Song",
    "op": "list",
    "method": "GET",
    "path": "/songs",
    "args": [],
    "select": {
      "genre": "v1",
      "limit": "v1",
      "q": "v1",
      "working": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "q",
      "genre",
      "working",
      "limit"
    ],
    "queryArgs": [
      {
        "name": "genre",
        "wire": "genre"
      },
      {
        "name": "limit",
        "wire": "limit"
      },
      {
        "name": "q",
        "wire": "q"
      },
      {
        "name": "working",
        "wire": "working"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "count": 1,
      "source": "x",
      "attribution": {
        "text": "x",
        "url": "x",
        "html": "x"
      },
      "songs": [
        {
          "id": "x",
          "name": "x",
          "artist": "x",
          "genre": "x",
          "durationSec": 1,
          "upVotes": 1,
          "isWorking": true,
          "verifiedAt": "2026-01-01T00:00:00Z",
          "url": "x"
        }
      ]
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
