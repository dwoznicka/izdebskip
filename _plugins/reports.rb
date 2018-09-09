require 'active_support/inflector'

module Jekyll
  class ReportIndex < Page
    def initialize(site, base, dir, report = nil)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'
      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), "#{site.config['news_page_layout']}.html")
      self.data['report'] = report
      self.data['title'] = "#{report['title']} | Relacja"
      self.data['description'] = report['title']
    end
  end
  
  class IntegrationGenerator < Generator
    safe true
    
    def generate(site)
      dir = site.config['news_path'] || '/news'
      site.data['news_urls'] = []
      if site.layouts.key? site.config['news_page_layout']
        reports = site.data['news']
        reports = reports.reject { |r| !r['is_report'] }
        reports.each do |report|
          report_id = report['id']
          permalink = report_id['permalink'] ? report_id['permalink'] : report_id.to_s
          url = File.join(dir, permalink.parameterize)
          url = "#{url.chomp('/')}/"
          site.pages << ReportIndex.new(site, site.source, url, report)
          site.data['news_urls'] << url
        end
      end
    end
  end
end
