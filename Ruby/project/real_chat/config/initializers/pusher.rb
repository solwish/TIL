Pusher.app_id = Rails.application.secrets.app_id
Pusher.key = Rails.application.secrets.pusher_key
Pusher.secret = Rails.application.secrets.pusher_secret
Pusher.cluster = 'ap1'
Pusher.logger = Rails.logger
Pusher.encrypted = true
