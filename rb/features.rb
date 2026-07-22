# LmWhatsapp SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module LmWhatsappFeatures
  def self.make_feature(name)
    case name
    when "base"
      LmWhatsappBaseFeature.new
    when "test"
      LmWhatsappTestFeature.new
    else
      LmWhatsappBaseFeature.new
    end
  end
end
