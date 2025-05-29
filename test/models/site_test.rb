require "test_helper"

class SiteTest < ActiveSupport::TestCase
  include ActiveJob::TestHelper
  test "on create the job is queued" do
    user = users(:one)
    domain = domains(:one)
    Site.create(user: user, domain: domain, slug: "top")
    assert_enqueued_with(job: CreatePowerdnsResourceRecordSetJob, args: ["top"])
  end
end
