# LmWhatsapp SDK feature factory

from lmwhatsapp_sdk.feature.base_feature import LmWhatsappBaseFeature
from lmwhatsapp_sdk.feature.debug_feature import LmWhatsappDebugFeature
from lmwhatsapp_sdk.feature.idempotency_feature import LmWhatsappIdempotencyFeature
from lmwhatsapp_sdk.feature.metrics_feature import LmWhatsappMetricsFeature
from lmwhatsapp_sdk.feature.paging_feature import LmWhatsappPagingFeature
from lmwhatsapp_sdk.feature.ratelimit_feature import LmWhatsappRatelimitFeature
from lmwhatsapp_sdk.feature.retry_feature import LmWhatsappRetryFeature
from lmwhatsapp_sdk.feature.test_feature import LmWhatsappTestFeature
from lmwhatsapp_sdk.feature.timeout_feature import LmWhatsappTimeoutFeature


_FEATURES = {
    "base": lambda: LmWhatsappBaseFeature(),
    "debug": lambda: LmWhatsappDebugFeature(),
    "idempotency": lambda: LmWhatsappIdempotencyFeature(),
    "metrics": lambda: LmWhatsappMetricsFeature(),
    "paging": lambda: LmWhatsappPagingFeature(),
    "ratelimit": lambda: LmWhatsappRatelimitFeature(),
    "retry": lambda: LmWhatsappRetryFeature(),
    "test": lambda: LmWhatsappTestFeature(),
    "timeout": lambda: LmWhatsappTimeoutFeature(),
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
