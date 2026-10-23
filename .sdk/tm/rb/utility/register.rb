# RobloxIds SDK utility registration
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

RobloxIdsUtility.registrar = ->(u) {
  u.clean = RobloxIdsUtilities::Clean
  u.clean_add = RobloxIdsUtilities::CleanAdd
  u.clean_explain = RobloxIdsUtilities::CleanExplain
  u.done = RobloxIdsUtilities::Done
  u.make_error = RobloxIdsUtilities::MakeError
  u.feature_add = RobloxIdsUtilities::FeatureAdd
  u.feature_hook = RobloxIdsUtilities::FeatureHook
  u.feature_init = RobloxIdsUtilities::FeatureInit
  u.fetcher = RobloxIdsUtilities::Fetcher
  u.make_fetch_def = RobloxIdsUtilities::MakeFetchDef
  u.make_context = RobloxIdsUtilities::MakeContext
  u.make_options = RobloxIdsUtilities::MakeOptions
  u.make_request = RobloxIdsUtilities::MakeRequest
  u.make_response = RobloxIdsUtilities::MakeResponse
  u.make_result = RobloxIdsUtilities::MakeResult
  u.make_point = RobloxIdsUtilities::MakePoint
  u.make_spec = RobloxIdsUtilities::MakeSpec
  u.make_url = RobloxIdsUtilities::MakeUrl
  u.param = RobloxIdsUtilities::Param
  u.prepare_auth = RobloxIdsUtilities::PrepareAuth
  u.prepare_body = RobloxIdsUtilities::PrepareBody
  u.prepare_headers = RobloxIdsUtilities::PrepareHeaders
  u.prepare_method = RobloxIdsUtilities::PrepareMethod
  u.prepare_params = RobloxIdsUtilities::PrepareParams
  u.prepare_path = RobloxIdsUtilities::PreparePath
  u.prepare_query = RobloxIdsUtilities::PrepareQuery
  u.graphql_body = RobloxIdsUtilities::GraphqlBody
  u.graphql_errors = RobloxIdsUtilities::GraphqlErrors
  u.result_basic = RobloxIdsUtilities::ResultBasic
  u.result_body = RobloxIdsUtilities::ResultBody
  u.result_headers = RobloxIdsUtilities::ResultHeaders
  u.transform_request = RobloxIdsUtilities::TransformRequest
  u.transform_response = RobloxIdsUtilities::TransformResponse
}
