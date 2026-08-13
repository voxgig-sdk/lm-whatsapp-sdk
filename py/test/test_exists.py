# LmWhatsapp SDK exists test

import pytest
from lmwhatsapp_sdk import LmWhatsappSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = LmWhatsappSDK.test(None, None)
        assert testsdk is not None
