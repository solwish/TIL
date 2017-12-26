creds = Aws::Credentials.new(ENV['AWS_ID'], ENV['AWS_SECRET'])
Aws::Rails.add_action_mailer_delivery_method(:aws_sdk, credentials: creds, region: 'us-west-2')
