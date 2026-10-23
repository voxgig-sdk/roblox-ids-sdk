# RobloxIds SDK utility: make_context

from robloxids_sdk.core.context import RobloxIdsContext


def make_context_util(ctxmap, basectx):
    return RobloxIdsContext(ctxmap, basectx)
