# RobloxIds SDK exists test

import pytest
from robloxids_sdk import RobloxIdsSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = RobloxIdsSDK.test(None, None)
        assert testsdk is not None
