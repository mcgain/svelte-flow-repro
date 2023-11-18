source 'http://rubygems.org'

ruby '3.2.2'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

# gem 'administrate' # Hopefully I do not need this until https://github.com/thoughtbot/administrate/issues/2311 is complete
gem 'active_hash', github: 'zilkey/active_hash'
gem 'amazing_print' # awesome print seems unmaintained see https://github.com/awesome-print/awesome_print/issues/375
gem 'bootsnap', require: false
gem 'bugsnag'
gem 'cssbundling-rails', '~> 1.1'
gem 'dockerfile-rails', ">= 1.2", :group => :development
gem 'foreman'
gem 'friendly_id', '~> 5.2', '>= 5.2.5'
gem 'jbuilder', '~> 2.7'
gem 'jsbundling-rails', '~> 1.1'
gem 'lograge', "~> 0.12.0"
gem 'mini_magick', '~> 4.9', '>= 4.9.2'
gem 'paper_trail', "~> 15.0"
gem 'passwordless'
gem 'pdf-reader'
gem 'pg'
gem 'pgcli-rails', "~> 0.7.0"
gem 'prettier_print', "~> 1.2"
gem 'puma', '~> 4.1'
gem 'rails', '~> 7.0.4'
gem 'rake', '>= 13.0.6' # needed for diambiguation
gem 'redis', '~> 5.0'
gem 'sentry-rails'
gem 'sentry-ruby'
gem 'sidekiq', '~> 6.0', '>= 6.0.3'
gem 'slim'
gem 'stackprof'
gem 'syntax_tree', "~> 6.1"
gem 'syntax_tree-haml', "~> 4.0"
gem 'syntax_tree-rbs', "~> 1.0"
gem 'turbo-rails'
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
gem 'whenever', require: false
gem 'zeitwerk', '~> 2.6'

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'web-console', '~> 4.2'
end

group :test do
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
  gem 'webdrivers'
end

group :development, :test do
  gem 'pry-byebug'
  gem 'pry-rails'
end

