require 'active_support/inflector'
module Jekyll
  module UrlFilter
    def parameterize(input)
      input.to_s.parameterize if input
    end

    def news_path(input)
      site = @context.registers[:site]
      prefix = site.config['news_path']
      news_id = input['id']
      permalink = input['permalink'] ? input['permalink'] : news_id.to_s
      return "#{prefix}#{to_path permalink}"
    end

    protected

    def to_path(input, skip_slash = false)
      p = input.parameterize if input.is_a?(String)
      p = input.to_s.parameterize if input.is_a?(Fixnum)
      p = input.first.to_s.parameterize if input.is_a?(Array)
      return "#{p}/" if skip_slash
      "/#{p}/"
    end

  end
end

Liquid::Template.register_filter(Jekyll::UrlFilter)
