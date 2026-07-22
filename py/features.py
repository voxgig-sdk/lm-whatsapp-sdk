# LmWhatsapp SDK feature factory

from feature.base_feature import LmWhatsappBaseFeature
from feature.test_feature import LmWhatsappTestFeature


def _make_feature(name):
    features = {
        "base": lambda: LmWhatsappBaseFeature(),
        "test": lambda: LmWhatsappTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
