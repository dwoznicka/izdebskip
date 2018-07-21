# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard "jekyll-plus",
  extensions: ['md', 'mkd', 'mkdn', 'markdown', 'textile', 'html', 'haml', 'slim', 'xml', 'yml', 'js', 'json'],
  serve: true,
  drafts: true,
  future: true,
  config: ['_config.yml'] do
  watch /.*/
  ignore /^_site/
  ignore /^_site\/\.jekyll-metadata/
  ignore /\.jekyll-metadata/
  ignore /^external/
  ignore /^Gemfile(.lock)?/
  ignore /^Guardfile/
  ignore /^README.md/
  ignore /^Rakefile/
  ignore /\.sass-cache/
  ignore /\.jekyll-assets-cache/
  ignore /\.asset-cache/
  ignore /\.editorconfig/
  ignore /\.ruby-version/
  ignore /\.idea/
  ignore /\_docs/
end


guard 'livereload' do
  watch /.*/
end