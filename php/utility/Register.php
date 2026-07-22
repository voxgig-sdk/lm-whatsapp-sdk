<?php
declare(strict_types=1);

// LmWhatsapp SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

LmWhatsappUtility::setRegistrar(function (LmWhatsappUtility $u): void {
    $u->clean = [LmWhatsappClean::class, 'call'];
    $u->done = [LmWhatsappDone::class, 'call'];
    $u->make_error = [LmWhatsappMakeError::class, 'call'];
    $u->feature_add = [LmWhatsappFeatureAdd::class, 'call'];
    $u->feature_hook = [LmWhatsappFeatureHook::class, 'call'];
    $u->feature_init = [LmWhatsappFeatureInit::class, 'call'];
    $u->fetcher = [LmWhatsappFetcher::class, 'call'];
    $u->make_fetch_def = [LmWhatsappMakeFetchDef::class, 'call'];
    $u->make_context = [LmWhatsappMakeContext::class, 'call'];
    $u->make_options = [LmWhatsappMakeOptions::class, 'call'];
    $u->make_request = [LmWhatsappMakeRequest::class, 'call'];
    $u->make_response = [LmWhatsappMakeResponse::class, 'call'];
    $u->make_result = [LmWhatsappMakeResult::class, 'call'];
    $u->make_point = [LmWhatsappMakePoint::class, 'call'];
    $u->make_spec = [LmWhatsappMakeSpec::class, 'call'];
    $u->make_url = [LmWhatsappMakeUrl::class, 'call'];
    $u->param = [LmWhatsappParam::class, 'call'];
    $u->prepare_auth = [LmWhatsappPrepareAuth::class, 'call'];
    $u->prepare_body = [LmWhatsappPrepareBody::class, 'call'];
    $u->prepare_headers = [LmWhatsappPrepareHeaders::class, 'call'];
    $u->prepare_method = [LmWhatsappPrepareMethod::class, 'call'];
    $u->prepare_params = [LmWhatsappPrepareParams::class, 'call'];
    $u->prepare_path = [LmWhatsappPreparePath::class, 'call'];
    $u->prepare_query = [LmWhatsappPrepareQuery::class, 'call'];
    $u->result_basic = [LmWhatsappResultBasic::class, 'call'];
    $u->result_body = [LmWhatsappResultBody::class, 'call'];
    $u->result_headers = [LmWhatsappResultHeaders::class, 'call'];
    $u->transform_request = [LmWhatsappTransformRequest::class, 'call'];
    $u->transform_response = [LmWhatsappTransformResponse::class, 'call'];
});
