# RobloxIds SDK feature factory

from robloxids_sdk.feature.base_feature import RobloxIdsBaseFeature
from robloxids_sdk.feature.ratelimit_feature import RobloxIdsRatelimitFeature
from robloxids_sdk.feature.retry_feature import RobloxIdsRetryFeature
from robloxids_sdk.feature.test_feature import RobloxIdsTestFeature
from robloxids_sdk.feature.timeout_feature import RobloxIdsTimeoutFeature


_FEATURES = {
    "base": lambda: RobloxIdsBaseFeature(),
    "ratelimit": lambda: RobloxIdsRatelimitFeature(),
    "retry": lambda: RobloxIdsRetryFeature(),
    "test": lambda: RobloxIdsTestFeature(),
    "timeout": lambda: RobloxIdsTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
