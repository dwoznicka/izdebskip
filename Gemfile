source "https://rubygems.org"

ruby '2.6.6'

gem 'rake', '~> 12.3.0'

gem 'sass', '~> 3.5.4'
gem 'jekyll', '~> 3.3'

gem 'liquid', '~> 3.0.0'
gem 'liquid-c', '~> 3.0.0'
gem 'jekyll-paginate-v2', '~> 1.8.2'
gem 'jekyll-autoprefixer', '~> 1.0', '>= 1.0.1'
gem 'jekyll-redirect-from'

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem 'sprockets', '3.7.2'
  gem 'jekyll-assets', '~> 2.2.0'
  gem "jekyll-feed", "~> 0.6"
  gem "activesupport"
end

group :development do 
  gem 'thin'
  gem 'rack'
  gem 'guard-jekyll-plus', git: 'https://github.com/imathis/guard-jekyll-plus.git'
  gem 'guard-livereload'
  gem 'rb-readline'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?

