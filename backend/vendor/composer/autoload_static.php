<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit67fccc8c1c09196ef1c0793e99011354
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Src\\' => 4,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Src\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit67fccc8c1c09196ef1c0793e99011354::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit67fccc8c1c09196ef1c0793e99011354::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit67fccc8c1c09196ef1c0793e99011354::$classMap;

        }, null, ClassLoader::class);
    }
}
