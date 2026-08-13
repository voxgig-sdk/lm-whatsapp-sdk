# LmWhatsapp SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

LmWhatsappUtility.registrar = ->(u) {
  u.clean = LmWhatsappUtilities::Clean
  u.done = LmWhatsappUtilities::Done
  u.make_error = LmWhatsappUtilities::MakeError
  u.feature_add = LmWhatsappUtilities::FeatureAdd
  u.feature_hook = LmWhatsappUtilities::FeatureHook
  u.feature_init = LmWhatsappUtilities::FeatureInit
  u.fetcher = LmWhatsappUtilities::Fetcher
  u.make_fetch_def = LmWhatsappUtilities::MakeFetchDef
  u.make_context = LmWhatsappUtilities::MakeContext
  u.make_options = LmWhatsappUtilities::MakeOptions
  u.make_request = LmWhatsappUtilities::MakeRequest
  u.make_response = LmWhatsappUtilities::MakeResponse
  u.make_result = LmWhatsappUtilities::MakeResult
  u.make_point = LmWhatsappUtilities::MakePoint
  u.make_spec = LmWhatsappUtilities::MakeSpec
  u.make_url = LmWhatsappUtilities::MakeUrl
  u.param = LmWhatsappUtilities::Param
  u.prepare_auth = LmWhatsappUtilities::PrepareAuth
  u.prepare_body = LmWhatsappUtilities::PrepareBody
  u.prepare_headers = LmWhatsappUtilities::PrepareHeaders
  u.prepare_method = LmWhatsappUtilities::PrepareMethod
  u.prepare_params = LmWhatsappUtilities::PrepareParams
  u.prepare_path = LmWhatsappUtilities::PreparePath
  u.prepare_query = LmWhatsappUtilities::PrepareQuery
  u.graphql_body = LmWhatsappUtilities::GraphqlBody
  u.graphql_errors = LmWhatsappUtilities::GraphqlErrors
  u.result_basic = LmWhatsappUtilities::ResultBasic
  u.result_body = LmWhatsappUtilities::ResultBody
  u.result_headers = LmWhatsappUtilities::ResultHeaders
  u.transform_request = LmWhatsappUtilities::TransformRequest
  u.transform_response = LmWhatsappUtilities::TransformResponse
}
