# LmWhatsapp SDK utility: make_context

from projectname_sdk.core.context import LmWhatsappContext


def make_context_util(ctxmap, basectx):
    return LmWhatsappContext(ctxmap, basectx)
