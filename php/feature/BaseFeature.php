<?php
declare(strict_types=1);

// LmWhatsapp SDK base feature

class LmWhatsappBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(LmWhatsappContext $ctx, array $options): void {}
    public function PostConstruct(LmWhatsappContext $ctx): void {}
    public function PostConstructEntity(LmWhatsappContext $ctx): void {}
    public function SetData(LmWhatsappContext $ctx): void {}
    public function GetData(LmWhatsappContext $ctx): void {}
    public function GetMatch(LmWhatsappContext $ctx): void {}
    public function SetMatch(LmWhatsappContext $ctx): void {}
    public function PrePoint(LmWhatsappContext $ctx): void {}
    public function PreSpec(LmWhatsappContext $ctx): void {}
    public function PreRequest(LmWhatsappContext $ctx): void {}
    public function PreResponse(LmWhatsappContext $ctx): void {}
    public function PreResult(LmWhatsappContext $ctx): void {}
    public function PreDone(LmWhatsappContext $ctx): void {}
    public function PreUnexpected(LmWhatsappContext $ctx): void {}
}
