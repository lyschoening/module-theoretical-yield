SystemJS.config({
	paths: {
		"github:": "jspm_packages/github/",
		"npm:": "jspm_packages/npm/"
	},
	browserConfig: {
		"baseURL": "/",
		"paths": {
			"src": "./"
		}
	},
	packages: {
		"src": {
			"defaultExtension": "js",
			"main": "./index.js"
		}
	}
});

SystemJS.config({
	packageConfigPaths: [
		"github:*/*.json",
		"npm:@*/*.json",
		"npm:*.json"
	],
	map: {
		"angular": "github:angular/bower-angular@1.5.7",
		"angular-material": "github:angular/bower-material@1.0.9",
		"angular-ui-router": "github:angular-ui/angular-ui-router-bower@0.3.1",
		"assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
		"browserify": "npm:browserify@13.1.0",
		"buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
		"child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
		"constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
		"crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
		"css": "github:systemjs/plugin-css@0.1.23",
		"decaf-common": "github:biosustain/decaf-frontend-common@master",
		"dgram": "github:jspm/nodelibs-dgram@0.2.0-alpha",
		"dns": "github:jspm/nodelibs-dns@0.2.0-alpha",
		"domain": "github:jspm/nodelibs-domain@0.2.0-alpha",
		"ecc-jsbn": "npm:ecc-jsbn@0.1.1",
		"events": "github:jspm/nodelibs-events@0.2.0-alpha",
		"fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
		"http": "github:jspm/nodelibs-http@0.2.0-alpha",
		"https": "github:jspm/nodelibs-https@0.2.0-alpha",
		"jodid25519": "npm:jodid25519@1.0.2",
		"jsbn": "npm:jsbn@0.1.0",
		"module": "github:jspm/nodelibs-module@0.2.0-alpha",
		"net": "github:jspm/nodelibs-net@0.2.0-alpha",
		"os": "github:jspm/nodelibs-os@0.2.0-alpha",
		"path": "github:jspm/nodelibs-path@0.2.0-alpha",
		"plotly.js": "npm:plotly.js@1.15.0",
		"process": "github:jspm/nodelibs-process@0.2.0-alpha",
		"punycode": "github:jspm/nodelibs-punycode@0.2.0-alpha",
		"querystring": "github:jspm/nodelibs-querystring@0.2.0-alpha",
		"source-map": "npm:source-map@0.1.43",
		"stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
		"string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
		"timers": "github:jspm/nodelibs-timers@0.2.0-alpha",
		"tls": "github:jspm/nodelibs-tls@0.2.0-alpha",
		"tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
		"tweetnacl": "npm:tweetnacl@0.13.3",
		"url": "github:jspm/nodelibs-url@0.2.0-alpha",
		"util": "github:jspm/nodelibs-util@0.2.0-alpha",
		"vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
		"zlib": "github:jspm/nodelibs-zlib@0.2.0-alpha"
	},
	packages: {
		"github:angular/bower-material@1.0.9": {
			"map": {
				"css": "github:systemjs/plugin-css@0.1.23",
				"angular-aria": "github:angular/bower-angular-aria@1.5.7",
				"angular-animate": "github:angular/bower-angular-animate@1.5.7",
				"angular": "github:angular/bower-angular@1.5.7"
			}
		},
		"github:angular/bower-angular-aria@1.5.7": {
			"map": {
				"angular": "github:angular/bower-angular@1.5.7"
			}
		},
		"github:angular/bower-angular-animate@1.5.7": {
			"map": {
				"angular": "github:angular/bower-angular@1.5.7"
			}
		},
		"github:angular-ui/angular-ui-router-bower@0.3.1": {
			"map": {
				"angular": "github:angular/bower-angular@1.5.7"
			}
		},
		"npm:plotly.js@1.15.0": {
			"map": {
				"d3": "npm:d3@3.5.17",
				"es6-promise": "npm:es6-promise@3.2.1",
				"gl-error3d": "npm:gl-error3d@1.0.4",
				"gl-line3d": "npm:gl-line3d@1.1.0",
				"country-regex": "npm:country-regex@1.0.0",
				"gl-scatter2d-fancy": "npm:gl-scatter2d-fancy@1.1.2",
				"convex-hull": "npm:convex-hull@1.0.3",
				"mouse-wheel": "npm:mouse-wheel@1.2.0",
				"gl-scatter3d": "npm:gl-scatter3d@1.0.10",
				"gl-surface3d": "npm:gl-surface3d@1.2.3",
				"alpha-shape": "npm:alpha-shape@1.0.0",
				"gl-mat4": "npm:gl-mat4@1.1.4",
				"3d-view": "npm:3d-view@2.0.0",
				"arraytools": "npm:arraytools@1.1.2",
				"gl-plot3d": "npm:gl-plot3d@1.5.0",
				"mouse-change": "npm:mouse-change@1.3.0",
				"gl-heatmap2d": "npm:gl-heatmap2d@1.0.2",
				"superscript-text": "npm:superscript-text@1.0.0",
				"tinycolor2": "npm:tinycolor2@1.4.1",
				"robust-orientation": "npm:robust-orientation@1.1.3",
				"gl-contour2d": "npm:gl-contour2d@1.1.2",
				"fast-isnumeric": "npm:fast-isnumeric@1.1.1",
				"ndarray": "npm:ndarray@1.0.18",
				"delaunay-triangulate": "npm:delaunay-triangulate@1.1.6",
				"gl-spikes2d": "npm:gl-spikes2d@1.0.1",
				"gl-scatter2d": "npm:gl-scatter2d@1.0.6",
				"gl-mesh3d": "npm:gl-mesh3d@1.2.0",
				"topojson": "npm:topojson@1.6.26",
				"mapbox-gl": "npm:mapbox-gl@0.18.0",
				"right-now": "npm:right-now@1.0.0",
				"ndarray-homography": "npm:ndarray-homography@1.0.0",
				"gl-error2d": "npm:gl-error2d@1.1.2",
				"gl-select-box": "npm:gl-select-box@1.0.1",
				"gl-plot2d": "npm:gl-plot2d@1.1.7",
				"sane-topojson": "npm:sane-topojson@1.2.3",
				"gl-line2d": "npm:gl-line2d@1.3.0",
				"ndarray-ops": "npm:ndarray-ops@1.2.2",
				"ndarray-fill": "npm:ndarray-fill@1.0.1"
			}
		},
		"npm:gl-scatter3d@1.0.10": {
			"map": {
				"gl-mat4": "npm:gl-mat4@1.1.4",
				"gl-vao": "npm:gl-vao@1.3.0",
				"gl-buffer": "npm:gl-buffer@2.1.2",
				"glslify": "npm:glslify@2.3.1",
				"typedarray-pool": "npm:typedarray-pool@1.1.0",
				"gl-shader": "npm:gl-shader@4.2.0",
				"vectorize-text": "npm:vectorize-text@3.0.2"
			}
		},
		"npm:gl-surface3d@1.2.3": {
			"map": {
				"gl-mat4": "npm:gl-mat4@1.1.4",
				"ndarray": "npm:ndarray@1.0.18",
				"binary-search-bounds": "npm:binary-search-bounds@1.0.0",
				"gl-vao": "npm:gl-vao@1.3.0",
				"gl-texture2d": "npm:gl-texture2d@2.0.10",
				"gl-buffer": "npm:gl-buffer@2.1.2",
				"glslify": "npm:glslify@2.3.1",
				"typedarray-pool": "npm:typedarray-pool@1.1.0",
				"bit-twiddle": "npm:bit-twiddle@1.0.2",
				"colormap": "npm:colormap@2.2.0",
				"glsl-specular-beckmann": "npm:glsl-specular-beckmann@1.1.2",
				"surface-nets": "npm:surface-nets@1.0.2",
				"dup": "npm:dup@1.0.0",
				"ndarray-ops": "npm:ndarray-ops@1.2.2",
				"gl-shader": "npm:gl-shader@4.2.0",
				"ndarray-pack": "npm:ndarray-pack@1.2.0",
				"ndarray-gradient": "npm:ndarray-gradient@1.0.0",
				"ndarray-scratch": "npm:ndarray-scratch@1.2.0"
			}
		},
		"npm:gl-line3d@1.1.0": {
			"map": {
				"ndarray": "npm:ndarray@1.0.18",
				"binary-search-bounds": "npm:binary-search-bounds@1.0.0",
				"gl-vao": "npm:gl-vao@1.3.0",
				"gl-texture2d": "npm:gl-texture2d@2.0.10",
				"gl-buffer": "npm:gl-buffer@2.1.2",
				"glslify": "npm:glslify@2.3.1",
				"gl-shader": "npm:gl-shader@4.2.0",
				"glsl-read-float": "npm:glsl-read-float@1.1.0"
			}
		},
		"npm:gl-plot3d@1.5.0": {
			"map": {
				"ndarray": "npm:ndarray@1.0.18",
				"gl-mat4": "npm:gl-mat4@1.1.4",
				"mouse-change": "npm:mouse-change@1.3.0",
				"glslify": "npm:glslify@2.3.1",
				"gl-axes3d": "npm:gl-axes3d@1.2.4",
				"a-big-triangle": "npm:a-big-triangle@1.0.2",
				"gl-shader": "npm:gl-shader@4.2.0",
				"gl-fbo": "npm:gl-fbo@2.0.5",
				"3d-view-controls": "npm:3d-view-controls@2.1.1",
				"gl-select-static": "npm:gl-select-static@2.0.2",
				"gl-spikes3d": "npm:gl-spikes3d@1.0.5"
			}
		},
		"npm:mouse-wheel@1.2.0": {
			"map": {
				"right-now": "npm:right-now@1.0.0",
				"to-px": "npm:to-px@1.0.1",
				"signum": "npm:signum@1.0.0"
			}
		},
		"npm:gl-heatmap2d@1.0.2": {
			"map": {
				"binary-search-bounds": "npm:binary-search-bounds@2.0.3",
				"gl-buffer": "npm:gl-buffer@2.1.2",
				"glslify": "npm:glslify@4.0.0",
				"typedarray-pool": "npm:typedarray-pool@1.1.0",
				"gl-shader": "npm:gl-shader@4.2.0",
				"iota-array": "npm:iota-array@1.0.0"
			}
		},
		"npm:gl-error3d@1.0.4": {
			"map": {
				"gl-vao": "npm:gl-vao@1.3.0",
				"gl-buffer": "npm:gl-buffer@2.1.2",
				"glslify": "npm:glslify@2.3.1",
				"gl-shader": "npm:gl-shader@4.2.0"
			}
		},
		"npm:gl-scatter2d-fancy@1.1.2": {
			"map": {
				"text-cache": "npm:text-cache@4.0.0",
				"gl-buffer": "npm:gl-buffer@2.1.2",
				"glslify": "npm:glslify@2.3.1",
				"typedarray-pool": "npm:typedarray-pool@1.1.0",
				"gl-shader": "npm:gl-shader@4.2.0",
				"vectorize-text": "npm:vectorize-text@3.0.2"
			}
		},
		"npm:convex-hull@1.0.3": {
			"map": {
				"affine-hull": "npm:affine-hull@1.0.0",
				"monotone-convex-hull-2d": "npm:monotone-convex-hull-2d@1.0.1",
				"incremental-convex-hull": "npm:incremental-convex-hull@1.0.1"
			}
		},
		"npm:alpha-shape@1.0.0": {
			"map": {
				"simplicial-complex-boundary": "npm:simplicial-complex-boundary@1.0.1",
				"alpha-complex": "npm:alpha-complex@1.0.0"
			}
		},
		"npm:gl-contour2d@1.1.2": {
			"map": {
				"binary-search-bounds": "npm:binary-search-bounds@2.0.3",
				"gl-buffer": "npm:gl-buffer@2.1.2",
				"glslify": "npm:glslify@4.0.0",
				"ndarray": "npm:ndarray@1.0.18",
				"surface-nets": "npm:surface-nets@1.0.2",
				"gl-shader": "npm:gl-shader@4.2.0",
				"iota-array": "npm:iota-array@1.0.0",
				"clean-pslg": "npm:clean-pslg@1.1.0",
				"cdt2d": "npm:cdt2d@1.0.0"
			}
		},
		"npm:3d-view@2.0.0": {
			"map": {
				"orbit-camera-controller": "npm:orbit-camera-controller@4.0.0",
				"matrix-camera-controller": "npm:matrix-camera-controller@2.1.1",
				"turntable-camera-controller": "npm:turntable-camera-controller@3.0.1"
			}
		},
		"npm:gl-mesh3d@1.2.0": {
			"map": {
				"gl-mat4": "npm:gl-mat4@1.1.4",
				"ndarray": "npm:ndarray@1.0.18",
				"colormap": "npm:colormap@2.2.0",
				"gl-buffer": "npm:gl-buffer@2.1.2",
				"gl-shader": "npm:gl-shader@4.2.0",
				"gl-texture2d": "npm:gl-texture2d@2.0.10",
				"gl-vao": "npm:gl-vao@1.3.0",
				"glslify": "npm:glslify@2.3.1",
				"typedarray-pool": "npm:typedarray-pool@1.1.0",
				"normals": "npm:normals@1.1.0",
				"polytope-closest-point": "npm:polytope-closest-point@1.0.0",
				"barycentric": "npm:barycentric@1.0.1",
				"glsl-specular-cook-torrance": "npm:glsl-specular-cook-torrance@2.0.1",
				"simplicial-complex-contour": "npm:simplicial-complex-contour@1.0.2"
			}
		},
		"npm:delaunay-triangulate@1.1.6": {
			"map": {
				"incremental-convex-hull": "npm:incremental-convex-hull@1.0.1",
				"uniq": "npm:uniq@1.0.1"
			}
		},
		"npm:gl-scatter2d@1.0.6": {
			"map": {
				"binary-search-bounds": "npm:binary-search-bounds@2.0.3",
				"gl-buffer": "npm:gl-buffer@2.1.2",
				"gl-shader": "npm:gl-shader@4.2.0",
				"glslify": "npm:glslify@2.3.1",
				"typedarray-pool": "npm:typedarray-pool@1.1.0",
				"snap-points-2d": "npm:snap-points-2d@3.1.0"
			}
		},
		"npm:topojson@1.6.26": {
			"map": {
				"d3": "npm:d3@3.5.17",
				"d3-queue": "npm:d3-queue@2.0.3",
				"shapefile": "npm:shapefile@0.3.1",
				"d3-geo-projection": "npm:d3-geo-projection@0.2.16",
				"rw": "npm:rw@1.3.2",
				"optimist": "npm:optimist@0.3.7"
			}
		},
		"npm:text-cache@4.0.0": {
			"map": {
				"vectorize-text": "npm:vectorize-text@3.0.2"
			}
		},
		"npm:gl-texture2d@2.0.10": {
			"map": {
				"ndarray": "npm:ndarray@1.0.18",
				"ndarray-ops": "npm:ndarray-ops@1.2.2",
				"typedarray-pool": "npm:typedarray-pool@1.1.0"
			}
		},
		"npm:gl-buffer@2.1.2": {
			"map": {
				"ndarray": "npm:ndarray@1.0.18",
				"typedarray-pool": "npm:typedarray-pool@1.1.0",
				"ndarray-ops": "npm:ndarray-ops@1.2.2"
			}
		},
		"npm:ndarray@1.0.18": {
			"map": {
				"iota-array": "npm:iota-array@1.0.0",
				"is-buffer": "npm:is-buffer@1.1.3"
			}
		},
		"npm:robust-orientation@1.1.3": {
			"map": {
				"two-product": "npm:two-product@1.0.2",
				"robust-scale": "npm:robust-scale@1.0.2",
				"robust-sum": "npm:robust-sum@1.0.0",
				"robust-subtract": "npm:robust-subtract@1.0.0"
			}
		},
		"npm:colormap@2.2.0": {
			"map": {
				"arraytools": "npm:arraytools@1.1.2",
				"clone": "npm:clone@1.0.2"
			}
		},
		"npm:affine-hull@1.0.0": {
			"map": {
				"robust-orientation": "npm:robust-orientation@1.1.3"
			}
		},
		"npm:incremental-convex-hull@1.0.1": {
			"map": {
				"robust-orientation": "npm:robust-orientation@1.1.3",
				"simplicial-complex": "npm:simplicial-complex@1.0.0"
			}
		},
		"npm:monotone-convex-hull-2d@1.0.1": {
			"map": {
				"robust-orientation": "npm:robust-orientation@1.1.3"
			}
		},
		"npm:typedarray-pool@1.1.0": {
			"map": {
				"bit-twiddle": "npm:bit-twiddle@1.0.2",
				"dup": "npm:dup@1.0.0"
			}
		},
		"npm:mouse-change@1.3.0": {
			"map": {
				"mouse-event": "npm:mouse-event@1.0.5"
			}
		},
		"npm:mapbox-gl@0.18.0": {
			"map": {
				"resolve-url": "npm:resolve-url@0.2.1",
				"request": "npm:request@2.74.0",
				"envify": "npm:envify@3.4.1",
				"pngjs": "npm:pngjs@2.3.1",
				"mapbox-gl-function": "npm:mapbox-gl-function@1.2.1",
				"shelf-pack": "npm:shelf-pack@1.1.0",
				"feature-filter": "npm:feature-filter@2.2.0",
				"gl-matrix": "npm:gl-matrix@2.3.2",
				"grid-index": "npm:grid-index@0.1.0",
				"point-geometry": "npm:point-geometry@0.0.0",
				"vector-tile": "npm:vector-tile@1.3.0",
				"mapbox-gl-style-spec": "npm:mapbox-gl-style-spec@8.8.0",
				"supercluster": "npm:supercluster@2.1.0",
				"geojson-vt": "npm:geojson-vt@2.3.0",
				"unitbezier": "npm:unitbezier@0.0.0",
				"minifyify": "npm:minifyify@7.3.3",
				"geojson-rewind": "npm:geojson-rewind@0.1.0",
				"csscolorparser": "npm:csscolorparser@1.0.2",
				"unassertify": "npm:unassertify@2.0.3",
				"mapbox-gl-js-supported": "npm:mapbox-gl-js-supported@1.1.0",
				"vt-pbf": "npm:vt-pbf@2.0.2",
				"webworkify": "npm:webworkify@1.3.0",
				"brfs": "npm:brfs@1.4.3",
				"pbf": "npm:pbf@1.3.7"
			}
		},
		"npm:gl-error2d@1.1.2": {
			"map": {
				"gl-buffer": "npm:gl-buffer@2.1.2",
				"gl-shader": "npm:gl-shader@4.2.0",
				"glslify": "npm:glslify@2.3.1",
				"typedarray-pool": "npm:typedarray-pool@1.1.0"
			}
		},
		"npm:gl-select-box@1.0.1": {
			"map": {
				"gl-buffer": "npm:gl-buffer@2.1.2",
				"glslify": "npm:glslify@2.3.1",
				"gl-shader": "npm:gl-shader@4.2.0"
			}
		},
		"npm:gl-plot2d@1.1.7": {
			"map": {
				"binary-search-bounds": "npm:binary-search-bounds@2.0.3",
				"gl-buffer": "npm:gl-buffer@2.1.2",
				"glslify": "npm:glslify@2.3.1",
				"text-cache": "npm:text-cache@4.0.0",
				"gl-select-static": "npm:gl-select-static@2.0.2",
				"gl-shader": "npm:gl-shader@4.2.0",
				"glsl-inverse": "npm:glsl-inverse@1.0.0"
			}
		},
		"npm:gl-line2d@1.3.0": {
			"map": {
				"gl-buffer": "npm:gl-buffer@2.1.2",
				"gl-texture2d": "npm:gl-texture2d@2.0.10",
				"glslify": "npm:glslify@2.3.1",
				"ndarray": "npm:ndarray@1.0.18",
				"gl-shader": "npm:gl-shader@4.2.0",
				"typedarray-pool": "npm:typedarray-pool@1.1.0",
				"snap-points-2d": "npm:snap-points-2d@1.0.1",
				"glsl-inverse": "npm:glsl-inverse@1.0.0"
			}
		},
		"npm:alpha-complex@1.0.0": {
			"map": {
				"delaunay-triangulate": "npm:delaunay-triangulate@1.1.6",
				"circumradius": "npm:circumradius@1.0.0"
			}
		},
		"npm:glslify@2.3.1": {
			"map": {
				"bl": "npm:bl@0.9.5",
				"resolve": "npm:resolve@1.1.7",
				"through2": "npm:through2@0.6.5",
				"glslify-bundle": "npm:glslify-bundle@2.0.4",
				"glsl-resolve": "npm:glsl-resolve@0.0.1",
				"glslify-deps": "npm:glslify-deps@1.2.5",
				"xtend": "npm:xtend@4.0.1",
				"minimist": "npm:minimist@1.2.0",
				"static-module": "npm:static-module@1.3.1"
			}
		},
		"npm:glslify@4.0.0": {
			"map": {
				"bl": "npm:bl@1.1.2",
				"resolve": "npm:resolve@1.1.7",
				"through2": "npm:through2@0.6.5",
				"glslify-bundle": "npm:glslify-bundle@4.0.1",
				"glsl-resolve": "npm:glsl-resolve@0.0.1",
				"glslify-deps": "npm:glslify-deps@1.2.5",
				"xtend": "npm:xtend@4.0.1",
				"minimist": "npm:minimist@1.2.0",
				"static-module": "npm:static-module@1.3.1"
			}
		},
		"npm:gl-axes3d@1.2.4": {
			"map": {
				"bit-twiddle": "npm:bit-twiddle@1.0.2",
				"gl-mat4": "npm:gl-mat4@1.1.4",
				"gl-buffer": "npm:gl-buffer@2.1.2",
				"gl-vao": "npm:gl-vao@1.3.0",
				"glslify": "npm:glslify@2.3.1",
				"gl-shader": "npm:gl-shader@4.2.0",
				"robust-orientation": "npm:robust-orientation@1.1.3",
				"dup": "npm:dup@1.0.0",
				"vectorize-text": "npm:vectorize-text@3.0.2",
				"extract-frustum-planes": "npm:extract-frustum-planes@1.0.0",
				"gl-state": "npm:gl-state@1.0.0",
				"gl-vec4": "npm:gl-vec4@1.0.1",
				"split-polygon": "npm:split-polygon@1.0.0"
			}
		},
		"npm:matrix-camera-controller@2.1.1": {
			"map": {
				"binary-search-bounds": "npm:binary-search-bounds@1.0.0",
				"gl-mat4": "npm:gl-mat4@1.1.4",
				"mat4-interpolate": "npm:mat4-interpolate@1.0.4",
				"gl-vec3": "npm:gl-vec3@1.0.3"
			}
		},
		"npm:a-big-triangle@1.0.2": {
			"map": {
				"gl-vao": "npm:gl-vao@1.3.0",
				"gl-buffer": "npm:gl-buffer@2.1.2",
				"weak-map": "npm:weak-map@1.0.5"
			}
		},
		"npm:3d-view-controls@2.1.1": {
			"map": {
				"3d-view": "npm:3d-view@2.0.0",
				"mouse-wheel": "npm:mouse-wheel@1.2.0",
				"right-now": "npm:right-now@1.0.0",
				"mouse-change": "npm:mouse-change@1.3.0"
			}
		},
		"npm:orbit-camera-controller@4.0.0": {
			"map": {
				"gl-mat4": "npm:gl-mat4@1.1.4",
				"filtered-vector": "npm:filtered-vector@1.2.4"
			}
		},
		"npm:turntable-camera-controller@3.0.1": {
			"map": {
				"gl-mat4": "npm:gl-mat4@1.1.4",
				"gl-vec3": "npm:gl-vec3@1.0.3",
				"filtered-vector": "npm:filtered-vector@1.2.4"
			}
		},
		"npm:gl-fbo@2.0.5": {
			"map": {
				"gl-texture2d": "npm:gl-texture2d@2.0.10"
			}
		},
		"npm:to-px@1.0.1": {
			"map": {
				"parse-unit": "npm:parse-unit@1.0.1"
			}
		},
		"npm:surface-nets@1.0.2": {
			"map": {
				"zero-crossings": "npm:zero-crossings@1.0.1",
				"ndarray-extract-contour": "npm:ndarray-extract-contour@1.0.1",
				"triangulate-hypercube": "npm:triangulate-hypercube@1.0.1"
			}
		},
		"npm:simplicial-complex-boundary@1.0.1": {
			"map": {
				"reduce-simplicial-complex": "npm:reduce-simplicial-complex@1.0.0",
				"boundary-cells": "npm:boundary-cells@2.0.1"
			}
		},
		"npm:ndarray-homography@1.0.0": {
			"map": {
				"ndarray-warp": "npm:ndarray-warp@1.0.1",
				"gl-matrix-invert": "npm:gl-matrix-invert@1.0.0"
			}
		},
		"npm:gl-select-static@2.0.2": {
			"map": {
				"bit-twiddle": "npm:bit-twiddle@1.0.2",
				"ndarray": "npm:ndarray@1.0.18",
				"gl-fbo": "npm:gl-fbo@2.0.5",
				"typedarray-pool": "npm:typedarray-pool@1.1.0",
				"cwise": "npm:cwise@1.0.9"
			}
		},
		"npm:gl-spikes3d@1.0.5": {
			"map": {
				"gl-buffer": "npm:gl-buffer@2.1.2",
				"gl-shader": "npm:gl-shader@4.2.0",
				"gl-vao": "npm:gl-vao@1.3.0",
				"glslify": "npm:glslify@2.3.1"
			}
		},
		"npm:ndarray-pack@1.2.0": {
			"map": {
				"ndarray": "npm:ndarray@1.0.18",
				"cwise-compiler": "npm:cwise-compiler@1.1.2"
			}
		},
		"npm:vectorize-text@3.0.2": {
			"map": {
				"ndarray": "npm:ndarray@1.0.18",
				"surface-nets": "npm:surface-nets@1.0.2",
				"cdt2d": "npm:cdt2d@1.0.0",
				"clean-pslg": "npm:clean-pslg@1.1.0",
				"simplify-planar-graph": "npm:simplify-planar-graph@2.0.1",
				"planar-graph-to-polyline": "npm:planar-graph-to-polyline@1.0.5",
				"triangulate-polyline": "npm:triangulate-polyline@1.0.3"
			}
		},
		"npm:gl-shader@4.2.0": {
			"map": {
				"gl-format-compiler-error": "npm:gl-format-compiler-error@1.0.2",
				"weakmap-shim": "npm:weakmap-shim@1.1.0"
			}
		},
		"npm:cdt2d@1.0.0": {
			"map": {
				"binary-search-bounds": "npm:binary-search-bounds@2.0.3",
				"robust-orientation": "npm:robust-orientation@1.1.3",
				"robust-in-sphere": "npm:robust-in-sphere@1.1.3"
			}
		},
		"npm:robust-scale@1.0.2": {
			"map": {
				"two-product": "npm:two-product@1.0.2",
				"two-sum": "npm:two-sum@1.0.0"
			}
		},
		"npm:ndarray-gradient@1.0.0": {
			"map": {
				"dup": "npm:dup@1.0.0",
				"cwise-compiler": "npm:cwise-compiler@1.1.2"
			}
		},
		"npm:ndarray-scratch@1.2.0": {
			"map": {
				"ndarray": "npm:ndarray@1.0.18",
				"typedarray-pool": "npm:typedarray-pool@1.1.0",
				"ndarray-ops": "npm:ndarray-ops@1.2.2"
			}
		},
		"npm:clean-pslg@1.1.0": {
			"map": {
				"uniq": "npm:uniq@1.0.1",
				"union-find": "npm:union-find@1.0.2",
				"rat-vec": "npm:rat-vec@1.1.0",
				"box-intersect": "npm:box-intersect@1.0.1",
				"compare-cell": "npm:compare-cell@1.0.0",
				"big-rat": "npm:big-rat@1.0.2",
				"robust-segment-intersect": "npm:robust-segment-intersect@1.0.1",
				"nextafter": "npm:nextafter@1.0.0"
			}
		},
		"npm:request@2.74.0": {
			"map": {
				"bl": "npm:bl@1.1.2",
				"aws-sign2": "npm:aws-sign2@0.6.0",
				"aws4": "npm:aws4@1.4.1",
				"caseless": "npm:caseless@0.11.0",
				"combined-stream": "npm:combined-stream@1.0.5",
				"extend": "npm:extend@3.0.0",
				"forever-agent": "npm:forever-agent@0.6.1",
				"form-data": "npm:form-data@1.0.0-rc4",
				"har-validator": "npm:har-validator@2.0.6",
				"hawk": "npm:hawk@3.1.3",
				"http-signature": "npm:http-signature@1.1.1",
				"isstream": "npm:isstream@0.1.2",
				"json-stringify-safe": "npm:json-stringify-safe@5.0.1",
				"node-uuid": "npm:node-uuid@1.4.7",
				"mime-types": "npm:mime-types@2.1.11",
				"qs": "npm:qs@6.2.1",
				"tunnel-agent": "npm:tunnel-agent@0.4.3",
				"stringstream": "npm:stringstream@0.0.5",
				"oauth-sign": "npm:oauth-sign@0.8.2",
				"is-typedarray": "npm:is-typedarray@1.0.0",
				"tough-cookie": "npm:tough-cookie@2.3.1"
			}
		},
		"npm:mapbox-gl-style-spec@8.8.0": {
			"map": {
				"minimist": "npm:minimist@0.0.8",
				"rw": "npm:rw@0.1.4",
				"csscolorparser": "npm:csscolorparser@1.0.2",
				"lodash.isequal": "npm:lodash.isequal@3.0.4",
				"sort-object": "npm:sort-object@0.3.2",
				"jsonlint-lines-primitives": "npm:jsonlint-lines-primitives@1.6.0"
			}
		},
		"npm:shapefile@0.3.1": {
			"map": {
				"d3-queue": "npm:d3-queue@1.2.3",
				"optimist": "npm:optimist@0.3.7",
				"iconv-lite": "npm:iconv-lite@0.2.11"
			}
		},
		"npm:geojson-rewind@0.1.0": {
			"map": {
				"minimist": "npm:minimist@0.0.5",
				"concat-stream": "npm:concat-stream@1.2.1",
				"geojson-area": "npm:geojson-area@0.1.0"
			}
		},
		"npm:ndarray-ops@1.2.2": {
			"map": {
				"cwise-compiler": "npm:cwise-compiler@1.1.2"
			}
		},
		"npm:vector-tile@1.3.0": {
			"map": {
				"point-geometry": "npm:point-geometry@0.0.0"
			}
		},
		"npm:glsl-specular-cook-torrance@2.0.1": {
			"map": {
				"glsl-specular-beckmann": "npm:glsl-specular-beckmann@1.1.2"
			}
		},
		"npm:simplicial-complex-contour@1.0.2": {
			"map": {
				"ndarray": "npm:ndarray@1.0.18",
				"typedarray-pool": "npm:typedarray-pool@1.1.0",
				"marching-simplex-table": "npm:marching-simplex-table@1.0.0",
				"ndarray-sort": "npm:ndarray-sort@1.0.1"
			}
		},
		"npm:through2@0.6.5": {
			"map": {
				"xtend": "npm:xtend@4.0.1",
				"readable-stream": "npm:readable-stream@1.0.34"
			}
		},
		"npm:d3-geo-projection@0.2.16": {
			"map": {
				"brfs": "npm:brfs@1.4.3"
			}
		},
		"npm:glsl-resolve@0.0.1": {
			"map": {
				"resolve": "npm:resolve@0.6.3",
				"xtend": "npm:xtend@2.2.0"
			}
		},
		"npm:simplicial-complex@1.0.0": {
			"map": {
				"union-find": "npm:union-find@1.0.2",
				"bit-twiddle": "npm:bit-twiddle@1.0.2"
			}
		},
		"npm:envify@3.4.1": {
			"map": {
				"jstransform": "npm:jstransform@11.0.3",
				"through": "npm:through@2.3.8"
			}
		},
		"npm:minifyify@7.3.3": {
			"map": {
				"through": "npm:through@2.3.8",
				"concat-stream": "npm:concat-stream@1.5.1",
				"lodash.assign": "npm:lodash.assign@4.1.0",
				"mkdirp": "npm:mkdirp@0.5.1",
				"source-map": "npm:source-map@0.5.6",
				"tmp": "npm:tmp@0.0.28",
				"transform-filter": "npm:transform-filter@0.1.1",
				"lodash.bind": "npm:lodash.bind@4.2.0",
				"lodash.foreach": "npm:lodash.foreach@4.4.1",
				"convert-source-map": "npm:convert-source-map@1.3.0",
				"lodash.defaults": "npm:lodash.defaults@4.1.0",
				"uglify-js": "npm:uglify-js@2.7.0"
			}
		},
		"npm:unassertify@2.0.3": {
			"map": {
				"through": "npm:through@2.3.8",
				"escodegen": "npm:escodegen@1.8.0",
				"multi-stage-sourcemap": "npm:multi-stage-sourcemap@0.2.1",
				"unassert": "npm:unassert@1.4.1",
				"convert-source-map": "npm:convert-source-map@1.3.0",
				"esprima": "npm:esprima@2.7.2"
			}
		},
		"npm:glslify-deps@1.2.5": {
			"map": {
				"glsl-resolve": "npm:glsl-resolve@0.0.1",
				"resolve": "npm:resolve@1.1.7",
				"inherits": "npm:inherits@2.0.1",
				"glsl-tokenizer": "npm:glsl-tokenizer@2.1.2",
				"map-limit": "npm:map-limit@0.0.1",
				"findup": "npm:findup@0.1.5",
				"events": "npm:events@1.1.1",
				"graceful-fs": "npm:graceful-fs@4.1.5"
			}
		},
		"npm:snap-points-2d@3.1.0": {
			"map": {
				"typedarray-pool": "npm:typedarray-pool@1.1.0"
			}
		},
		"npm:zero-crossings@1.0.1": {
			"map": {
				"cwise-compiler": "npm:cwise-compiler@1.1.2"
			}
		},
		"npm:snap-points-2d@1.0.1": {
			"map": {
				"typedarray-pool": "npm:typedarray-pool@1.1.0"
			}
		},
		"npm:vt-pbf@2.0.2": {
			"map": {
				"point-geometry": "npm:point-geometry@0.0.0",
				"vector-tile": "npm:vector-tile@1.3.0",
				"pbf": "npm:pbf@1.3.7"
			}
		},
		"npm:ndarray-extract-contour@1.0.1": {
			"map": {
				"typedarray-pool": "npm:typedarray-pool@1.1.0"
			}
		},
		"npm:reduce-simplicial-complex@1.0.0": {
			"map": {
				"compare-cell": "npm:compare-cell@1.0.0",
				"cell-orientation": "npm:cell-orientation@1.0.1",
				"compare-oriented-cell": "npm:compare-oriented-cell@1.0.1"
			}
		},
		"npm:mat4-interpolate@1.0.4": {
			"map": {
				"gl-mat4": "npm:gl-mat4@1.1.4",
				"gl-vec3": "npm:gl-vec3@1.0.3",
				"mat4-recompose": "npm:mat4-recompose@1.0.4",
				"quat-slerp": "npm:quat-slerp@1.0.1",
				"mat4-decompose": "npm:mat4-decompose@1.0.4"
			}
		},
		"npm:gl-state@1.0.0": {
			"map": {
				"uniq": "npm:uniq@1.0.1"
			}
		},
		"npm:split-polygon@1.0.0": {
			"map": {
				"robust-sum": "npm:robust-sum@1.0.0",
				"robust-dot-product": "npm:robust-dot-product@1.0.0"
			}
		},
		"npm:filtered-vector@1.2.4": {
			"map": {
				"binary-search-bounds": "npm:binary-search-bounds@1.0.0",
				"cubic-hermite": "npm:cubic-hermite@1.0.0"
			}
		},
		"npm:brfs@1.4.3": {
			"map": {
				"through2": "npm:through2@2.0.1",
				"resolve": "npm:resolve@1.1.7",
				"static-module": "npm:static-module@1.3.1",
				"quote-stream": "npm:quote-stream@1.0.2"
			}
		},
		"npm:bl@1.1.2": {
			"map": {
				"readable-stream": "npm:readable-stream@2.0.6"
			}
		},
		"npm:bl@0.9.5": {
			"map": {
				"readable-stream": "npm:readable-stream@1.0.34"
			}
		},
		"npm:polytope-closest-point@1.0.0": {
			"map": {
				"numeric": "npm:numeric@1.2.6"
			}
		},
		"npm:barycentric@1.0.1": {
			"map": {
				"robust-linear-solve": "npm:robust-linear-solve@1.0.0"
			}
		},
		"npm:supercluster@2.1.0": {
			"map": {
				"kdbush": "npm:kdbush@1.0.0"
			}
		},
		"npm:ndarray-fill@1.0.1": {
			"map": {
				"cwise": "npm:cwise@1.0.9"
			}
		},
		"npm:ndarray-warp@1.0.1": {
			"map": {
				"cwise": "npm:cwise@1.0.9",
				"ndarray-linear-interpolate": "npm:ndarray-linear-interpolate@1.0.0"
			}
		},
		"npm:glslify-bundle@4.0.1": {
			"map": {
				"glsl-token-whitespace-trim": "npm:glsl-token-whitespace-trim@1.0.0",
				"glsl-token-defines": "npm:glsl-token-defines@1.0.0",
				"glsl-inject-defines": "npm:glsl-inject-defines@1.0.3",
				"glsl-token-descope": "npm:glsl-token-descope@1.0.2",
				"glsl-tokenizer": "npm:glsl-tokenizer@2.1.2",
				"glsl-token-depth": "npm:glsl-token-depth@1.1.2",
				"murmurhash-js": "npm:murmurhash-js@1.0.0",
				"glsl-token-scope": "npm:glsl-token-scope@1.1.2",
				"glsl-token-string": "npm:glsl-token-string@1.0.1",
				"shallow-copy": "npm:shallow-copy@0.0.1"
			}
		},
		"npm:glslify-bundle@2.0.4": {
			"map": {
				"glsl-token-defines": "npm:glsl-token-defines@1.0.0",
				"glsl-inject-defines": "npm:glsl-inject-defines@1.0.3",
				"glsl-token-descope": "npm:glsl-token-descope@1.0.2",
				"glsl-tokenizer": "npm:glsl-tokenizer@2.1.2",
				"glsl-token-depth": "npm:glsl-token-depth@1.1.2",
				"glsl-token-scope": "npm:glsl-token-scope@1.1.2",
				"glsl-token-string": "npm:glsl-token-string@1.0.1"
			}
		},
		"npm:gl-matrix-invert@1.0.0": {
			"map": {
				"gl-mat4": "npm:gl-mat4@1.1.4",
				"gl-mat3": "npm:gl-mat3@1.0.0",
				"gl-mat2": "npm:gl-mat2@1.0.0"
			}
		},
		"npm:static-module@1.3.1": {
			"map": {
				"concat-stream": "npm:concat-stream@1.4.10",
				"escodegen": "npm:escodegen@1.3.3",
				"through2": "npm:through2@0.4.2",
				"readable-stream": "npm:readable-stream@1.0.34",
				"object-inspect": "npm:object-inspect@0.4.0",
				"has": "npm:has@1.0.1",
				"duplexer2": "npm:duplexer2@0.0.2",
				"shallow-copy": "npm:shallow-copy@0.0.1",
				"quote-stream": "npm:quote-stream@0.0.0",
				"static-eval": "npm:static-eval@0.2.4",
				"falafel": "npm:falafel@1.2.0"
			}
		},
		"npm:simplify-planar-graph@2.0.1": {
			"map": {
				"simplicial-complex": "npm:simplicial-complex@0.3.3",
				"robust-orientation": "npm:robust-orientation@1.1.3"
			}
		},
		"npm:planar-graph-to-polyline@1.0.5": {
			"map": {
				"robust-orientation": "npm:robust-orientation@1.1.3",
				"two-product": "npm:two-product@1.0.2",
				"robust-sum": "npm:robust-sum@1.0.0",
				"uniq": "npm:uniq@1.0.1",
				"edges-to-adjacency-list": "npm:edges-to-adjacency-list@1.0.0",
				"planar-dual": "npm:planar-dual@1.0.2",
				"point-in-big-polygon": "npm:point-in-big-polygon@2.0.0"
			}
		},
		"npm:triangulate-hypercube@1.0.1": {
			"map": {
				"gamma": "npm:gamma@0.1.0",
				"permutation-rank": "npm:permutation-rank@1.0.0",
				"permutation-parity": "npm:permutation-parity@1.0.0"
			}
		},
		"npm:gl-format-compiler-error@1.0.2": {
			"map": {
				"glsl-shader-name": "npm:glsl-shader-name@1.0.0",
				"gl-constants": "npm:gl-constants@1.0.0",
				"add-line-numbers": "npm:add-line-numbers@1.0.1",
				"sprintf-js": "npm:sprintf-js@1.0.3"
			}
		},
		"npm:pbf@1.3.7": {
			"map": {
				"ieee754": "npm:ieee754@1.1.6",
				"resolve-protobuf-schema": "npm:resolve-protobuf-schema@2.0.0"
			}
		},
		"npm:optimist@0.3.7": {
			"map": {
				"wordwrap": "npm:wordwrap@0.0.3"
			}
		},
		"npm:cwise-compiler@1.1.2": {
			"map": {
				"uniq": "npm:uniq@1.0.1"
			}
		},
		"npm:circumradius@1.0.0": {
			"map": {
				"circumcenter": "npm:circumcenter@1.0.0"
			}
		},
		"npm:jstransform@11.0.3": {
			"map": {
				"source-map": "npm:source-map@0.4.4",
				"commoner": "npm:commoner@0.10.4",
				"base62": "npm:base62@1.1.1",
				"esprima-fb": "npm:esprima-fb@15001.1.0-dev-harmony-fb",
				"object-assign": "npm:object-assign@2.1.1"
			}
		},
		"github:jspm/nodelibs-buffer@0.2.0-alpha": {
			"map": {
				"buffer-browserify": "npm:buffer@4.7.1"
			}
		},
		"npm:triangulate-polyline@1.0.3": {
			"map": {
				"cdt2d": "npm:cdt2d@1.0.0"
			}
		},
		"npm:rat-vec@1.1.0": {
			"map": {
				"big-rat": "npm:big-rat@1.0.2"
			}
		},
		"npm:box-intersect@1.0.1": {
			"map": {
				"bit-twiddle": "npm:bit-twiddle@1.0.2",
				"typedarray-pool": "npm:typedarray-pool@1.1.0"
			}
		},
		"npm:big-rat@1.0.2": {
			"map": {
				"bit-twiddle": "npm:bit-twiddle@1.0.2",
				"bn.js": "npm:bn.js@2.2.0",
				"double-bits": "npm:double-bits@1.1.1"
			}
		},
		"npm:robust-in-sphere@1.1.3": {
			"map": {
				"robust-scale": "npm:robust-scale@1.0.2",
				"robust-sum": "npm:robust-sum@1.0.0",
				"two-product": "npm:two-product@1.0.2",
				"robust-subtract": "npm:robust-subtract@1.0.0"
			}
		},
		"npm:robust-segment-intersect@1.0.1": {
			"map": {
				"robust-orientation": "npm:robust-orientation@1.1.3"
			}
		},
		"npm:form-data@1.0.0-rc4": {
			"map": {
				"combined-stream": "npm:combined-stream@1.0.5",
				"mime-types": "npm:mime-types@2.1.11",
				"async": "npm:async@1.5.2"
			}
		},
		"npm:through2@2.0.1": {
			"map": {
				"readable-stream": "npm:readable-stream@2.0.6",
				"xtend": "npm:xtend@4.0.1"
			}
		},
		"npm:concat-stream@1.5.1": {
			"map": {
				"readable-stream": "npm:readable-stream@2.0.6",
				"inherits": "npm:inherits@2.0.1",
				"typedarray": "npm:typedarray@0.0.6"
			}
		},
		"npm:mkdirp@0.5.1": {
			"map": {
				"minimist": "npm:minimist@0.0.8"
			}
		},
		"npm:marching-simplex-table@1.0.0": {
			"map": {
				"convex-hull": "npm:convex-hull@1.0.3"
			}
		},
		"npm:ndarray-sort@1.0.1": {
			"map": {
				"typedarray-pool": "npm:typedarray-pool@1.1.0"
			}
		},
		"npm:readable-stream@2.0.6": {
			"map": {
				"inherits": "npm:inherits@2.0.1",
				"isarray": "npm:isarray@1.0.0",
				"process-nextick-args": "npm:process-nextick-args@1.0.7",
				"string_decoder": "npm:string_decoder@0.10.31",
				"core-util-is": "npm:core-util-is@1.0.2",
				"util-deprecate": "npm:util-deprecate@1.0.2"
			}
		},
		"npm:transform-filter@0.1.1": {
			"map": {
				"through": "npm:through@2.3.8",
				"multimatch": "npm:multimatch@2.1.0"
			}
		},
		"npm:combined-stream@1.0.5": {
			"map": {
				"delayed-stream": "npm:delayed-stream@1.0.0"
			}
		},
		"npm:escodegen@1.8.0": {
			"map": {
				"esprima": "npm:esprima@2.7.2",
				"optionator": "npm:optionator@0.8.1",
				"esutils": "npm:esutils@2.0.2",
				"estraverse": "npm:estraverse@1.9.3"
			}
		},
		"npm:http-signature@1.1.1": {
			"map": {
				"assert-plus": "npm:assert-plus@0.2.0",
				"jsprim": "npm:jsprim@1.3.0",
				"sshpk": "npm:sshpk@1.9.2"
			}
		},
		"npm:har-validator@2.0.6": {
			"map": {
				"chalk": "npm:chalk@1.1.3",
				"commander": "npm:commander@2.9.0",
				"is-my-json-valid": "npm:is-my-json-valid@2.13.1",
				"pinkie-promise": "npm:pinkie-promise@2.0.1"
			}
		},
		"npm:hawk@3.1.3": {
			"map": {
				"boom": "npm:boom@2.10.1",
				"sntp": "npm:sntp@1.0.9",
				"cryptiles": "npm:cryptiles@2.0.5",
				"hoek": "npm:hoek@2.16.3"
			}
		},
		"npm:concat-stream@1.4.10": {
			"map": {
				"readable-stream": "npm:readable-stream@1.1.14",
				"inherits": "npm:inherits@2.0.1",
				"typedarray": "npm:typedarray@0.0.6"
			}
		},
		"npm:cwise@1.0.9": {
			"map": {
				"cwise-compiler": "npm:cwise-compiler@1.1.2",
				"static-module": "npm:static-module@1.3.1",
				"uglify-js": "npm:uglify-js@2.7.0",
				"cwise-parser": "npm:cwise-parser@1.0.3"
			}
		},
		"npm:glsl-token-defines@1.0.0": {
			"map": {
				"glsl-tokenizer": "npm:glsl-tokenizer@2.1.2"
			}
		},
		"npm:glsl-token-descope@1.0.2": {
			"map": {
				"glsl-token-depth": "npm:glsl-token-depth@1.1.2",
				"glsl-token-scope": "npm:glsl-token-scope@1.1.2",
				"glsl-token-properties": "npm:glsl-token-properties@1.0.1",
				"glsl-token-assignments": "npm:glsl-token-assignments@2.0.1"
			}
		},
		"npm:glsl-inject-defines@1.0.3": {
			"map": {
				"glsl-token-string": "npm:glsl-token-string@1.0.1",
				"glsl-tokenizer": "npm:glsl-tokenizer@2.1.2",
				"glsl-token-inject-block": "npm:glsl-token-inject-block@1.1.0"
			}
		},
		"npm:multi-stage-sourcemap@0.2.1": {
			"map": {
				"source-map": "npm:source-map@0.1.43"
			}
		},
		"npm:through2@0.4.2": {
			"map": {
				"xtend": "npm:xtend@2.1.2",
				"readable-stream": "npm:readable-stream@1.0.34"
			}
		},
		"npm:escodegen@1.3.3": {
			"map": {
				"esprima": "npm:esprima@1.1.1",
				"esutils": "npm:esutils@1.0.0",
				"estraverse": "npm:estraverse@1.5.1"
			}
		},
		"npm:simplicial-complex@0.3.3": {
			"map": {
				"bit-twiddle": "npm:bit-twiddle@0.0.2",
				"union-find": "npm:union-find@0.0.4"
			}
		},
		"npm:nextafter@1.0.0": {
			"map": {
				"double-bits": "npm:double-bits@1.1.1"
			}
		},
		"npm:glsl-tokenizer@2.1.2": {
			"map": {
				"through2": "npm:through2@0.6.5"
			}
		},
		"npm:findup@0.1.5": {
			"map": {
				"commander": "npm:commander@2.1.0",
				"colors": "npm:colors@0.6.2"
			}
		},
		"npm:readable-stream@1.0.34": {
			"map": {
				"inherits": "npm:inherits@2.0.1",
				"isarray": "npm:isarray@0.0.1",
				"string_decoder": "npm:string_decoder@0.10.31",
				"core-util-is": "npm:core-util-is@1.0.2",
				"stream-browserify": "npm:stream-browserify@1.0.0"
			}
		},
		"npm:lodash.isequal@3.0.4": {
			"map": {
				"lodash._baseisequal": "npm:lodash._baseisequal@3.0.7",
				"lodash._bindcallback": "npm:lodash._bindcallback@3.0.1"
			}
		},
		"npm:tmp@0.0.28": {
			"map": {
				"os-tmpdir": "npm:os-tmpdir@1.0.1"
			}
		},
		"npm:unassert@1.4.1": {
			"map": {
				"esutils": "npm:esutils@2.0.2",
				"esprima": "npm:esprima@2.7.2",
				"deep-equal": "npm:deep-equal@1.0.1",
				"escallmatch": "npm:escallmatch@1.4.2",
				"estraverse": "npm:estraverse@4.2.0",
				"espurify": "npm:espurify@1.6.0"
			}
		},
		"npm:permutation-rank@1.0.0": {
			"map": {
				"typedarray-pool": "npm:typedarray-pool@1.1.0",
				"invert-permutation": "npm:invert-permutation@1.0.0"
			}
		},
		"npm:compare-oriented-cell@1.0.1": {
			"map": {
				"cell-orientation": "npm:cell-orientation@1.0.1",
				"compare-cell": "npm:compare-cell@1.0.0"
			}
		},
		"npm:jsonlint-lines-primitives@1.6.0": {
			"map": {
				"nomnom": "npm:nomnom@1.8.1",
				"JSV": "npm:JSV@4.0.2"
			}
		},
		"npm:sort-object@0.3.2": {
			"map": {
				"sort-asc": "npm:sort-asc@0.1.0",
				"sort-desc": "npm:sort-desc@0.1.1"
			}
		},
		"npm:robust-linear-solve@1.0.0": {
			"map": {
				"robust-determinant": "npm:robust-determinant@1.1.0"
			}
		},
		"npm:robust-dot-product@1.0.0": {
			"map": {
				"robust-sum": "npm:robust-sum@1.0.0",
				"two-product": "npm:two-product@1.0.2"
			}
		},
		"npm:mat4-recompose@1.0.4": {
			"map": {
				"gl-mat4": "npm:gl-mat4@1.1.4"
			}
		},
		"npm:glsl-shader-name@1.0.0": {
			"map": {
				"glsl-tokenizer": "npm:glsl-tokenizer@2.1.2",
				"atob-lite": "npm:atob-lite@1.0.0"
			}
		},
		"npm:concat-stream@1.2.1": {
			"map": {
				"bops": "npm:bops@0.0.6"
			}
		},
		"github:jspm/nodelibs-crypto@0.2.0-alpha": {
			"map": {
				"crypto-browserify": "npm:crypto-browserify@3.11.0"
			}
		},
		"github:jspm/nodelibs-stream@0.2.0-alpha": {
			"map": {
				"stream-browserify": "npm:stream-browserify@2.0.1"
			}
		},
		"npm:geojson-area@0.1.0": {
			"map": {
				"wgs84": "npm:wgs84@0.0.0"
			}
		},
		"npm:permutation-parity@1.0.0": {
			"map": {
				"typedarray-pool": "npm:typedarray-pool@1.1.0"
			}
		},
		"npm:map-limit@0.0.1": {
			"map": {
				"once": "npm:once@1.3.3"
			}
		},
		"github:jspm/nodelibs-url@0.2.0-alpha": {
			"map": {
				"url-browserify": "npm:url@0.11.0"
			}
		},
		"npm:circumcenter@1.0.0": {
			"map": {
				"dup": "npm:dup@1.0.0",
				"robust-linear-solve": "npm:robust-linear-solve@1.0.0"
			}
		},
		"npm:mat4-decompose@1.0.4": {
			"map": {
				"gl-mat4": "npm:gl-mat4@1.1.4",
				"gl-vec3": "npm:gl-vec3@1.0.3"
			}
		},
		"npm:buffer@4.7.1": {
			"map": {
				"ieee754": "npm:ieee754@1.1.6",
				"isarray": "npm:isarray@1.0.0",
				"base64-js": "npm:base64-js@1.1.2"
			}
		},
		"npm:duplexer2@0.0.2": {
			"map": {
				"readable-stream": "npm:readable-stream@1.1.14"
			}
		},
		"github:jspm/nodelibs-http@0.2.0-alpha": {
			"map": {
				"http-browserify": "npm:stream-http@2.3.1"
			}
		},
		"npm:quat-slerp@1.0.1": {
			"map": {
				"gl-quat": "npm:gl-quat@1.0.0"
			}
		},
		"npm:edges-to-adjacency-list@1.0.0": {
			"map": {
				"uniq": "npm:uniq@1.0.1"
			}
		},
		"npm:planar-dual@1.0.2": {
			"map": {
				"dup": "npm:dup@1.0.0",
				"compare-angle": "npm:compare-angle@1.0.1"
			}
		},
		"npm:point-in-big-polygon@2.0.0": {
			"map": {
				"binary-search-bounds": "npm:binary-search-bounds@1.0.0",
				"robust-orientation": "npm:robust-orientation@1.1.3",
				"interval-tree-1d": "npm:interval-tree-1d@1.0.3",
				"slab-decomposition": "npm:slab-decomposition@1.0.2"
			}
		},
		"npm:boundary-cells@2.0.1": {
			"map": {
				"tape": "npm:tape@4.6.0"
			}
		},
		"npm:kdbush@1.0.0": {
			"map": {
				"tape": "npm:tape@4.6.0"
			}
		},
		"npm:mime-types@2.1.11": {
			"map": {
				"mime-db": "npm:mime-db@1.23.0"
			}
		},
		"npm:has@1.0.1": {
			"map": {
				"function-bind": "npm:function-bind@1.1.0"
			}
		},
		"npm:source-map@0.4.4": {
			"map": {
				"amdefine": "npm:amdefine@1.0.0"
			}
		},
		"npm:resolve-protobuf-schema@2.0.0": {
			"map": {
				"protocol-buffers-schema": "npm:protocol-buffers-schema@2.2.0"
			}
		},
		"npm:quote-stream@1.0.2": {
			"map": {
				"minimist": "npm:minimist@1.2.0",
				"through2": "npm:through2@2.0.1",
				"buffer-equal": "npm:buffer-equal@0.0.1"
			}
		},
		"npm:quote-stream@0.0.0": {
			"map": {
				"through2": "npm:through2@0.4.2",
				"minimist": "npm:minimist@0.0.8"
			}
		},
		"npm:add-line-numbers@1.0.1": {
			"map": {
				"pad-left": "npm:pad-left@1.0.2"
			}
		},
		"npm:commoner@0.10.4": {
			"map": {
				"iconv-lite": "npm:iconv-lite@0.4.13",
				"commander": "npm:commander@2.9.0",
				"mkdirp": "npm:mkdirp@0.5.1",
				"graceful-fs": "npm:graceful-fs@4.1.5",
				"private": "npm:private@0.1.6",
				"detective": "npm:detective@4.3.1",
				"recast": "npm:recast@0.10.43",
				"glob": "npm:glob@5.0.15",
				"q": "npm:q@1.4.1"
			}
		},
		"npm:readable-stream@1.1.14": {
			"map": {
				"inherits": "npm:inherits@2.0.1",
				"core-util-is": "npm:core-util-is@1.0.2",
				"isarray": "npm:isarray@0.0.1",
				"string_decoder": "npm:string_decoder@0.10.31",
				"stream-browserify": "npm:stream-browserify@1.0.0"
			}
		},
		"npm:sshpk@1.9.2": {
			"map": {
				"assert-plus": "npm:assert-plus@1.0.0",
				"dashdash": "npm:dashdash@1.14.0",
				"getpass": "npm:getpass@0.1.6",
				"asn1": "npm:asn1@0.2.3"
			}
		},
		"github:jspm/nodelibs-zlib@0.2.0-alpha": {
			"map": {
				"zlib-browserify": "npm:browserify-zlib@0.1.4"
			}
		},
		"npm:is-my-json-valid@2.13.1": {
			"map": {
				"xtend": "npm:xtend@4.0.1",
				"generate-function": "npm:generate-function@2.0.0",
				"jsonpointer": "npm:jsonpointer@2.0.0",
				"generate-object-property": "npm:generate-object-property@1.2.0"
			}
		},
		"github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
			"map": {
				"string_decoder-browserify": "npm:string_decoder@0.10.31"
			}
		},
		"npm:source-map@0.1.43": {
			"map": {
				"amdefine": "npm:amdefine@1.0.0"
			}
		},
		"npm:static-eval@0.2.4": {
			"map": {
				"escodegen": "npm:escodegen@0.0.28"
			}
		},
		"npm:optionator@0.8.1": {
			"map": {
				"wordwrap": "npm:wordwrap@1.0.0",
				"prelude-ls": "npm:prelude-ls@1.1.2",
				"type-check": "npm:type-check@0.3.2",
				"deep-is": "npm:deep-is@0.1.3",
				"levn": "npm:levn@0.3.0",
				"fast-levenshtein": "npm:fast-levenshtein@1.1.4"
			}
		},
		"npm:nomnom@1.8.1": {
			"map": {
				"chalk": "npm:chalk@0.4.0",
				"underscore": "npm:underscore@1.6.0"
			}
		},
		"npm:bops@0.0.6": {
			"map": {
				"base64-js": "npm:base64-js@0.0.2",
				"to-utf8": "npm:to-utf8@0.0.1"
			}
		},
		"npm:boom@2.10.1": {
			"map": {
				"hoek": "npm:hoek@2.16.3"
			}
		},
		"github:jspm/nodelibs-domain@0.2.0-alpha": {
			"map": {
				"domain-browserify": "npm:domain-browser@1.1.7"
			}
		},
		"npm:falafel@1.2.0": {
			"map": {
				"isarray": "npm:isarray@0.0.1",
				"object-keys": "npm:object-keys@1.0.11",
				"foreach": "npm:foreach@2.0.5",
				"acorn": "npm:acorn@1.2.2"
			}
		},
		"npm:robust-determinant@1.1.0": {
			"map": {
				"robust-sum": "npm:robust-sum@1.0.0",
				"two-product": "npm:two-product@1.0.2",
				"robust-scale": "npm:robust-scale@1.0.2",
				"robust-compress": "npm:robust-compress@1.0.0"
			}
		},
		"npm:chalk@1.1.3": {
			"map": {
				"has-ansi": "npm:has-ansi@2.0.0",
				"escape-string-regexp": "npm:escape-string-regexp@1.0.5",
				"supports-color": "npm:supports-color@2.0.0",
				"strip-ansi": "npm:strip-ansi@3.0.1",
				"ansi-styles": "npm:ansi-styles@2.2.1"
			}
		},
		"npm:commander@2.9.0": {
			"map": {
				"graceful-readlink": "npm:graceful-readlink@1.0.1"
			}
		},
		"npm:stream-browserify@2.0.1": {
			"map": {
				"inherits": "npm:inherits@2.0.1",
				"readable-stream": "npm:readable-stream@2.1.4"
			}
		},
		"npm:stream-browserify@1.0.0": {
			"map": {
				"inherits": "npm:inherits@2.0.1",
				"readable-stream": "npm:readable-stream@1.1.14"
			}
		},
		"npm:crypto-browserify@3.11.0": {
			"map": {
				"inherits": "npm:inherits@2.0.1",
				"browserify-cipher": "npm:browserify-cipher@1.0.0",
				"public-encrypt": "npm:public-encrypt@4.0.0",
				"randombytes": "npm:randombytes@2.0.3",
				"create-ecdh": "npm:create-ecdh@4.0.0",
				"create-hash": "npm:create-hash@1.1.2",
				"create-hmac": "npm:create-hmac@1.1.4",
				"pbkdf2": "npm:pbkdf2@3.0.4",
				"browserify-sign": "npm:browserify-sign@4.0.0",
				"diffie-hellman": "npm:diffie-hellman@5.0.2"
			}
		},
		"npm:jsprim@1.3.0": {
			"map": {
				"extsprintf": "npm:extsprintf@1.0.2",
				"json-schema": "npm:json-schema@0.2.2",
				"verror": "npm:verror@1.3.6"
			}
		},
		"github:jspm/nodelibs-os@0.2.0-alpha": {
			"map": {
				"os-browserify": "npm:os-browserify@0.2.1"
			}
		},
		"npm:xtend@2.1.2": {
			"map": {
				"object-keys": "npm:object-keys@0.4.0"
			}
		},
		"npm:lodash._baseisequal@3.0.7": {
			"map": {
				"lodash.keys": "npm:lodash.keys@3.1.2",
				"lodash.isarray": "npm:lodash.isarray@3.0.4",
				"lodash.istypedarray": "npm:lodash.istypedarray@3.0.6"
			}
		},
		"npm:multimatch@2.1.0": {
			"map": {
				"array-differ": "npm:array-differ@1.0.0",
				"arrify": "npm:arrify@1.0.1",
				"array-union": "npm:array-union@1.0.2",
				"minimatch": "npm:minimatch@3.0.2"
			}
		},
		"npm:uglify-js@2.7.0": {
			"map": {
				"async": "npm:async@0.2.10",
				"source-map": "npm:source-map@0.5.6",
				"yargs": "npm:yargs@3.10.0",
				"uglify-to-browserify": "npm:uglify-to-browserify@1.0.2"
			}
		},
		"npm:gl-quat@1.0.0": {
			"map": {
				"gl-mat3": "npm:gl-mat3@1.0.0",
				"gl-vec3": "npm:gl-vec3@1.0.3",
				"gl-vec4": "npm:gl-vec4@1.0.1"
			}
		},
		"npm:stream-http@2.3.1": {
			"map": {
				"inherits": "npm:inherits@2.0.1",
				"xtend": "npm:xtend@4.0.1",
				"readable-stream": "npm:readable-stream@2.1.4",
				"to-arraybuffer": "npm:to-arraybuffer@1.0.1",
				"builtin-status-codes": "npm:builtin-status-codes@2.0.0"
			}
		},
		"npm:cryptiles@2.0.5": {
			"map": {
				"boom": "npm:boom@2.10.1"
			}
		},
		"npm:sntp@1.0.9": {
			"map": {
				"hoek": "npm:hoek@2.16.3"
			}
		},
		"npm:tape@4.6.0": {
			"map": {
				"glob": "npm:glob@7.0.5",
				"object-inspect": "npm:object-inspect@1.2.1",
				"has": "npm:has@1.0.1",
				"inherits": "npm:inherits@2.0.1",
				"minimist": "npm:minimist@1.2.0",
				"resolve": "npm:resolve@1.1.7",
				"through": "npm:through@2.3.8",
				"deep-equal": "npm:deep-equal@1.0.1",
				"function-bind": "npm:function-bind@1.1.0",
				"defined": "npm:defined@1.0.0",
				"string.prototype.trim": "npm:string.prototype.trim@1.1.2",
				"resumer": "npm:resumer@0.0.0"
			}
		},
		"npm:escallmatch@1.4.2": {
			"map": {
				"esprima": "npm:esprima@2.7.2",
				"deep-equal": "npm:deep-equal@1.0.1",
				"espurify": "npm:espurify@1.6.0",
				"estraverse": "npm:estraverse@4.2.0",
				"array-map": "npm:array-map@0.0.0",
				"array-reduce": "npm:array-reduce@0.0.0",
				"indexof": "npm:indexof@0.0.1",
				"array-filter": "npm:array-filter@1.0.0",
				"array-foreach": "npm:array-foreach@1.0.2"
			}
		},
		"npm:pinkie-promise@2.0.1": {
			"map": {
				"pinkie": "npm:pinkie@2.0.4"
			}
		},
		"npm:url@0.11.0": {
			"map": {
				"querystring": "npm:querystring@0.2.0",
				"punycode": "npm:punycode@1.3.2"
			}
		},
		"npm:compare-angle@1.0.1": {
			"map": {
				"signum": "npm:signum@0.0.0",
				"robust-orientation": "npm:robust-orientation@1.1.3",
				"robust-sum": "npm:robust-sum@1.0.0",
				"two-sum": "npm:two-sum@1.0.0",
				"robust-product": "npm:robust-product@1.0.0"
			}
		},
		"npm:cwise-parser@1.0.3": {
			"map": {
				"esprima": "npm:esprima@1.2.5",
				"uniq": "npm:uniq@1.0.1"
			}
		},
		"npm:escodegen@0.0.28": {
			"map": {
				"esprima": "npm:esprima@1.0.4",
				"estraverse": "npm:estraverse@1.3.2"
			}
		},
		"npm:interval-tree-1d@1.0.3": {
			"map": {
				"binary-search-bounds": "npm:binary-search-bounds@1.0.0"
			}
		},
		"npm:slab-decomposition@1.0.2": {
			"map": {
				"binary-search-bounds": "npm:binary-search-bounds@1.0.0",
				"robust-orientation": "npm:robust-orientation@1.1.3",
				"functional-red-black-tree": "npm:functional-red-black-tree@1.0.1"
			}
		},
		"npm:chalk@0.4.0": {
			"map": {
				"ansi-styles": "npm:ansi-styles@1.0.0",
				"strip-ansi": "npm:strip-ansi@0.1.1",
				"has-color": "npm:has-color@0.1.7"
			}
		},
		"npm:pad-left@1.0.2": {
			"map": {
				"repeat-string": "npm:repeat-string@1.5.4"
			}
		},
		"npm:recast@0.10.43": {
			"map": {
				"esprima-fb": "npm:esprima-fb@15001.1001.0-dev-harmony-fb",
				"source-map": "npm:source-map@0.5.6",
				"private": "npm:private@0.1.6",
				"ast-types": "npm:ast-types@0.8.15"
			}
		},
		"npm:readable-stream@2.1.4": {
			"map": {
				"core-util-is": "npm:core-util-is@1.0.2",
				"inherits": "npm:inherits@2.0.1",
				"isarray": "npm:isarray@1.0.0",
				"process-nextick-args": "npm:process-nextick-args@1.0.7",
				"string_decoder": "npm:string_decoder@0.10.31",
				"util-deprecate": "npm:util-deprecate@1.0.2",
				"buffer-shims": "npm:buffer-shims@1.0.0"
			}
		},
		"npm:browserify-zlib@0.1.4": {
			"map": {
				"readable-stream": "npm:readable-stream@2.1.4",
				"pako": "npm:pako@0.2.9"
			}
		},
		"npm:glob@5.0.15": {
			"map": {
				"inherits": "npm:inherits@2.0.1",
				"once": "npm:once@1.3.3",
				"minimatch": "npm:minimatch@3.0.2",
				"inflight": "npm:inflight@1.0.5",
				"path-is-absolute": "npm:path-is-absolute@1.0.0"
			}
		},
		"npm:detective@4.3.1": {
			"map": {
				"defined": "npm:defined@1.0.0",
				"acorn": "npm:acorn@1.2.2"
			}
		},
		"npm:once@1.3.3": {
			"map": {
				"wrappy": "npm:wrappy@1.0.2"
			}
		},
		"npm:verror@1.3.6": {
			"map": {
				"extsprintf": "npm:extsprintf@1.0.2"
			}
		},
		"npm:dashdash@1.14.0": {
			"map": {
				"assert-plus": "npm:assert-plus@1.0.0"
			}
		},
		"npm:getpass@0.1.6": {
			"map": {
				"assert-plus": "npm:assert-plus@1.0.0"
			}
		},
		"npm:ecc-jsbn@0.1.1": {
			"map": {
				"jsbn": "npm:jsbn@0.1.0"
			}
		},
		"npm:jodid25519@1.0.2": {
			"map": {
				"jsbn": "npm:jsbn@0.1.0"
			}
		},
		"npm:lodash.keys@3.1.2": {
			"map": {
				"lodash.isarray": "npm:lodash.isarray@3.0.4",
				"lodash._getnative": "npm:lodash._getnative@3.9.1",
				"lodash.isarguments": "npm:lodash.isarguments@3.0.9"
			}
		},
		"npm:type-check@0.3.2": {
			"map": {
				"prelude-ls": "npm:prelude-ls@1.1.2"
			}
		},
		"npm:levn@0.3.0": {
			"map": {
				"prelude-ls": "npm:prelude-ls@1.1.2",
				"type-check": "npm:type-check@0.3.2"
			}
		},
		"github:jspm/nodelibs-punycode@0.2.0-alpha": {
			"map": {
				"punycode-browserify": "npm:punycode@1.4.1"
			}
		},
		"npm:generate-object-property@1.2.0": {
			"map": {
				"is-property": "npm:is-property@1.0.2"
			}
		},
		"npm:espurify@1.6.0": {
			"map": {
				"core-js": "npm:core-js@2.4.1"
			}
		},
		"npm:glob@7.0.5": {
			"map": {
				"inherits": "npm:inherits@2.0.1",
				"once": "npm:once@1.3.3",
				"inflight": "npm:inflight@1.0.5",
				"minimatch": "npm:minimatch@3.0.2",
				"path-is-absolute": "npm:path-is-absolute@1.0.0",
				"fs.realpath": "npm:fs.realpath@1.0.0"
			}
		},
		"npm:public-encrypt@4.0.0": {
			"map": {
				"bn.js": "npm:bn.js@4.11.6",
				"create-hash": "npm:create-hash@1.1.2",
				"randombytes": "npm:randombytes@2.0.3",
				"parse-asn1": "npm:parse-asn1@5.0.0",
				"browserify-rsa": "npm:browserify-rsa@4.0.1"
			}
		},
		"npm:create-ecdh@4.0.0": {
			"map": {
				"bn.js": "npm:bn.js@4.11.6",
				"elliptic": "npm:elliptic@6.3.1"
			}
		},
		"npm:create-hash@1.1.2": {
			"map": {
				"inherits": "npm:inherits@2.0.1",
				"cipher-base": "npm:cipher-base@1.0.2",
				"ripemd160": "npm:ripemd160@1.0.1",
				"sha.js": "npm:sha.js@2.4.5"
			}
		},
		"npm:create-hmac@1.1.4": {
			"map": {
				"create-hash": "npm:create-hash@1.1.2",
				"inherits": "npm:inherits@2.0.1"
			}
		},
		"npm:pbkdf2@3.0.4": {
			"map": {
				"create-hmac": "npm:create-hmac@1.1.4"
			}
		},
		"npm:has-ansi@2.0.0": {
			"map": {
				"ansi-regex": "npm:ansi-regex@2.0.0"
			}
		},
		"npm:strip-ansi@3.0.1": {
			"map": {
				"ansi-regex": "npm:ansi-regex@2.0.0"
			}
		},
		"npm:yargs@3.10.0": {
			"map": {
				"camelcase": "npm:camelcase@1.2.1",
				"decamelize": "npm:decamelize@1.2.0",
				"window-size": "npm:window-size@0.1.0",
				"cliui": "npm:cliui@2.1.0"
			}
		},
		"npm:browserify-sign@4.0.0": {
			"map": {
				"inherits": "npm:inherits@2.0.1",
				"bn.js": "npm:bn.js@4.11.6",
				"create-hash": "npm:create-hash@1.1.2",
				"create-hmac": "npm:create-hmac@1.1.4",
				"parse-asn1": "npm:parse-asn1@5.0.0",
				"browserify-rsa": "npm:browserify-rsa@4.0.1",
				"elliptic": "npm:elliptic@6.3.1"
			}
		},
		"npm:diffie-hellman@5.0.2": {
			"map": {
				"bn.js": "npm:bn.js@4.11.6",
				"randombytes": "npm:randombytes@2.0.3",
				"miller-rabin": "npm:miller-rabin@4.0.0"
			}
		},
		"npm:string.prototype.trim@1.1.2": {
			"map": {
				"function-bind": "npm:function-bind@1.1.0",
				"es-abstract": "npm:es-abstract@1.5.1",
				"define-properties": "npm:define-properties@1.1.2"
			}
		},
		"npm:inflight@1.0.5": {
			"map": {
				"once": "npm:once@1.3.3",
				"wrappy": "npm:wrappy@1.0.2"
			}
		},
		"npm:robust-product@1.0.0": {
			"map": {
				"robust-scale": "npm:robust-scale@1.0.2",
				"robust-sum": "npm:robust-sum@1.0.0"
			}
		},
		"npm:minimatch@3.0.2": {
			"map": {
				"brace-expansion": "npm:brace-expansion@1.1.6"
			}
		},
		"npm:resumer@0.0.0": {
			"map": {
				"through": "npm:through@2.3.8"
			}
		},
		"npm:array-union@1.0.2": {
			"map": {
				"array-uniq": "npm:array-uniq@1.0.3"
			}
		},
		"npm:browserify-cipher@1.0.0": {
			"map": {
				"browserify-des": "npm:browserify-des@1.0.0",
				"evp_bytestokey": "npm:evp_bytestokey@1.0.0",
				"browserify-aes": "npm:browserify-aes@1.0.6"
			}
		},
		"npm:parse-asn1@5.0.0": {
			"map": {
				"create-hash": "npm:create-hash@1.1.2",
				"pbkdf2": "npm:pbkdf2@3.0.4",
				"browserify-aes": "npm:browserify-aes@1.0.6",
				"evp_bytestokey": "npm:evp_bytestokey@1.0.0",
				"asn1.js": "npm:asn1.js@4.8.0"
			}
		},
		"npm:browserify-rsa@4.0.1": {
			"map": {
				"bn.js": "npm:bn.js@4.11.6",
				"randombytes": "npm:randombytes@2.0.3"
			}
		},
		"npm:elliptic@6.3.1": {
			"map": {
				"bn.js": "npm:bn.js@4.11.6",
				"inherits": "npm:inherits@2.0.1",
				"hash.js": "npm:hash.js@1.0.3",
				"brorand": "npm:brorand@1.0.5"
			}
		},
		"npm:es-abstract@1.5.1": {
			"map": {
				"function-bind": "npm:function-bind@1.1.0",
				"is-callable": "npm:is-callable@1.1.3",
				"is-regex": "npm:is-regex@1.0.3",
				"es-to-primitive": "npm:es-to-primitive@1.1.1"
			}
		},
		"npm:cliui@2.1.0": {
			"map": {
				"wordwrap": "npm:wordwrap@0.0.2",
				"right-align": "npm:right-align@0.1.3",
				"center-align": "npm:center-align@0.1.3"
			}
		},
		"npm:cipher-base@1.0.2": {
			"map": {
				"inherits": "npm:inherits@2.0.1"
			}
		},
		"npm:browserify-des@1.0.0": {
			"map": {
				"cipher-base": "npm:cipher-base@1.0.2",
				"inherits": "npm:inherits@2.0.1",
				"des.js": "npm:des.js@1.0.0"
			}
		},
		"npm:evp_bytestokey@1.0.0": {
			"map": {
				"create-hash": "npm:create-hash@1.1.2"
			}
		},
		"npm:browserify@13.1.0": {
			"map": {
				"duplexer2": "npm:duplexer2@0.1.4",
				"os-browserify": "npm:os-browserify@0.1.2",
				"browserify-zlib": "npm:browserify-zlib@0.1.4",
				"buffer": "npm:buffer@4.7.1",
				"concat-stream": "npm:concat-stream@1.5.1",
				"crypto-browserify": "npm:crypto-browserify@3.11.0",
				"defined": "npm:defined@1.0.0",
				"domain-browser": "npm:domain-browser@1.1.7",
				"events": "npm:events@1.1.1",
				"glob": "npm:glob@5.0.15",
				"has": "npm:has@1.0.1",
				"inherits": "npm:inherits@2.0.1",
				"punycode": "npm:punycode@1.4.1",
				"readable-stream": "npm:readable-stream@2.1.4",
				"resolve": "npm:resolve@1.1.7",
				"stream-browserify": "npm:stream-browserify@2.0.1",
				"stream-http": "npm:stream-http@2.3.1",
				"string_decoder": "npm:string_decoder@0.10.31",
				"through2": "npm:through2@2.0.1",
				"url": "npm:url@0.11.0",
				"xtend": "npm:xtend@4.0.1",
				"console-browserify": "npm:console-browserify@1.1.0",
				"deps-sort": "npm:deps-sort@2.0.0",
				"JSONStream": "npm:JSONStream@1.1.4",
				"insert-module-globals": "npm:insert-module-globals@7.0.1",
				"parents": "npm:parents@1.0.1",
				"browser-pack": "npm:browser-pack@6.0.1",
				"browser-resolve": "npm:browser-resolve@1.11.2",
				"htmlescape": "npm:htmlescape@1.1.1",
				"labeled-stream-splicer": "npm:labeled-stream-splicer@2.0.0",
				"subarg": "npm:subarg@1.0.0",
				"tty-browserify": "npm:tty-browserify@0.0.0",
				"util": "npm:util@0.10.3",
				"read-only-stream": "npm:read-only-stream@2.0.0",
				"process": "npm:process@0.11.7",
				"shasum": "npm:shasum@1.0.2",
				"module-deps": "npm:module-deps@4.0.7",
				"syntax-error": "npm:syntax-error@1.1.6",
				"timers-browserify": "npm:timers-browserify@1.4.2",
				"vm-browserify": "npm:vm-browserify@0.0.4",
				"path-browserify": "npm:path-browserify@0.0.0",
				"constants-browserify": "npm:constants-browserify@1.0.0",
				"https-browserify": "npm:https-browserify@0.0.1",
				"assert": "npm:assert@1.3.0",
				"querystring-es3": "npm:querystring-es3@0.2.1",
				"shell-quote": "npm:shell-quote@1.6.1"
			}
		},
		"npm:miller-rabin@4.0.0": {
			"map": {
				"brorand": "npm:brorand@1.0.5",
				"bn.js": "npm:bn.js@4.11.6"
			}
		},
		"npm:brace-expansion@1.1.6": {
			"map": {
				"balanced-match": "npm:balanced-match@0.4.2",
				"concat-map": "npm:concat-map@0.0.1"
			}
		},
		"npm:sha.js@2.4.5": {
			"map": {
				"inherits": "npm:inherits@2.0.1"
			}
		},
		"npm:define-properties@1.1.2": {
			"map": {
				"foreach": "npm:foreach@2.0.5",
				"object-keys": "npm:object-keys@1.0.11"
			}
		},
		"npm:browserify-aes@1.0.6": {
			"map": {
				"create-hash": "npm:create-hash@1.1.2",
				"inherits": "npm:inherits@2.0.1",
				"cipher-base": "npm:cipher-base@1.0.2",
				"evp_bytestokey": "npm:evp_bytestokey@1.0.0",
				"buffer-xor": "npm:buffer-xor@1.0.3"
			}
		},
		"npm:hash.js@1.0.3": {
			"map": {
				"inherits": "npm:inherits@2.0.1"
			}
		},
		"npm:asn1.js@4.8.0": {
			"map": {
				"bn.js": "npm:bn.js@4.11.6",
				"inherits": "npm:inherits@2.0.1",
				"minimalistic-assert": "npm:minimalistic-assert@1.0.0"
			}
		},
		"npm:duplexer2@0.1.4": {
			"map": {
				"readable-stream": "npm:readable-stream@2.1.4"
			}
		},
		"npm:deps-sort@2.0.0": {
			"map": {
				"through2": "npm:through2@2.0.1",
				"JSONStream": "npm:JSONStream@1.1.4",
				"shasum": "npm:shasum@1.0.2",
				"subarg": "npm:subarg@1.0.0"
			}
		},
		"npm:JSONStream@1.1.4": {
			"map": {
				"through": "npm:through@2.3.8",
				"jsonparse": "npm:jsonparse@1.2.0"
			}
		},
		"npm:browser-pack@6.0.1": {
			"map": {
				"JSONStream": "npm:JSONStream@1.1.4",
				"defined": "npm:defined@1.0.0",
				"through2": "npm:through2@2.0.1",
				"combine-source-map": "npm:combine-source-map@0.7.2",
				"umd": "npm:umd@3.0.1"
			}
		},
		"npm:browser-resolve@1.11.2": {
			"map": {
				"resolve": "npm:resolve@1.1.7"
			}
		},
		"npm:labeled-stream-splicer@2.0.0": {
			"map": {
				"inherits": "npm:inherits@2.0.1",
				"isarray": "npm:isarray@0.0.1",
				"stream-splicer": "npm:stream-splicer@2.0.0"
			}
		},
		"npm:insert-module-globals@7.0.1": {
			"map": {
				"JSONStream": "npm:JSONStream@1.1.4",
				"concat-stream": "npm:concat-stream@1.5.1",
				"is-buffer": "npm:is-buffer@1.1.3",
				"through2": "npm:through2@2.0.1",
				"xtend": "npm:xtend@4.0.1",
				"process": "npm:process@0.11.7",
				"combine-source-map": "npm:combine-source-map@0.7.2",
				"lexical-scope": "npm:lexical-scope@1.2.0"
			}
		},
		"npm:subarg@1.0.0": {
			"map": {
				"minimist": "npm:minimist@1.2.0"
			}
		},
		"npm:util@0.10.3": {
			"map": {
				"inherits": "npm:inherits@2.0.1"
			}
		},
		"npm:read-only-stream@2.0.0": {
			"map": {
				"readable-stream": "npm:readable-stream@2.1.4"
			}
		},
		"npm:syntax-error@1.1.6": {
			"map": {
				"acorn": "npm:acorn@2.7.0"
			}
		},
		"npm:module-deps@4.0.7": {
			"map": {
				"JSONStream": "npm:JSONStream@1.1.4",
				"browser-resolve": "npm:browser-resolve@1.11.2",
				"concat-stream": "npm:concat-stream@1.5.1",
				"defined": "npm:defined@1.0.0",
				"detective": "npm:detective@4.3.1",
				"duplexer2": "npm:duplexer2@0.1.4",
				"inherits": "npm:inherits@2.0.1",
				"parents": "npm:parents@1.0.1",
				"readable-stream": "npm:readable-stream@2.1.4",
				"resolve": "npm:resolve@1.1.7",
				"subarg": "npm:subarg@1.0.0",
				"through2": "npm:through2@2.0.1",
				"xtend": "npm:xtend@4.0.1",
				"stream-combiner2": "npm:stream-combiner2@1.1.1"
			}
		},
		"npm:shasum@1.0.2": {
			"map": {
				"sha.js": "npm:sha.js@2.4.5",
				"json-stable-stringify": "npm:json-stable-stringify@0.0.1"
			}
		},
		"npm:timers-browserify@1.4.2": {
			"map": {
				"process": "npm:process@0.11.7"
			}
		},
		"npm:vm-browserify@0.0.4": {
			"map": {
				"indexof": "npm:indexof@0.0.1"
			}
		},
		"npm:right-align@0.1.3": {
			"map": {
				"align-text": "npm:align-text@0.1.4"
			}
		},
		"npm:center-align@0.1.3": {
			"map": {
				"align-text": "npm:align-text@0.1.4",
				"lazy-cache": "npm:lazy-cache@1.0.4"
			}
		},
		"npm:es-to-primitive@1.1.1": {
			"map": {
				"is-callable": "npm:is-callable@1.1.3",
				"is-date-object": "npm:is-date-object@1.0.1",
				"is-symbol": "npm:is-symbol@1.0.1"
			}
		},
		"npm:des.js@1.0.0": {
			"map": {
				"inherits": "npm:inherits@2.0.1",
				"minimalistic-assert": "npm:minimalistic-assert@1.0.0"
			}
		},
		"npm:assert@1.3.0": {
			"map": {
				"util": "npm:util@0.10.3"
			}
		},
		"npm:shell-quote@1.6.1": {
			"map": {
				"array-filter": "npm:array-filter@0.0.1",
				"array-reduce": "npm:array-reduce@0.0.0",
				"array-map": "npm:array-map@0.0.0",
				"jsonify": "npm:jsonify@0.0.0"
			}
		},
		"npm:console-browserify@1.1.0": {
			"map": {
				"date-now": "npm:date-now@0.1.4"
			}
		},
		"npm:parents@1.0.1": {
			"map": {
				"path-platform": "npm:path-platform@0.11.15"
			}
		},
		"npm:align-text@0.1.4": {
			"map": {
				"repeat-string": "npm:repeat-string@1.5.4",
				"longest": "npm:longest@1.0.1",
				"kind-of": "npm:kind-of@3.0.4"
			}
		},
		"npm:combine-source-map@0.7.2": {
			"map": {
				"convert-source-map": "npm:convert-source-map@1.1.3",
				"source-map": "npm:source-map@0.5.6",
				"inline-source-map": "npm:inline-source-map@0.6.2",
				"lodash.memoize": "npm:lodash.memoize@3.0.4"
			}
		},
		"npm:stream-combiner2@1.1.1": {
			"map": {
				"duplexer2": "npm:duplexer2@0.1.4",
				"readable-stream": "npm:readable-stream@2.1.4"
			}
		},
		"npm:json-stable-stringify@0.0.1": {
			"map": {
				"jsonify": "npm:jsonify@0.0.0"
			}
		},
		"npm:stream-splicer@2.0.0": {
			"map": {
				"inherits": "npm:inherits@2.0.1",
				"readable-stream": "npm:readable-stream@2.1.4"
			}
		},
		"github:jspm/nodelibs-timers@0.2.0-alpha": {
			"map": {
				"timers-browserify": "npm:timers-browserify@1.4.2"
			}
		},
		"npm:lexical-scope@1.2.0": {
			"map": {
				"astw": "npm:astw@2.0.0"
			}
		},
		"npm:kind-of@3.0.4": {
			"map": {
				"is-buffer": "npm:is-buffer@1.1.3"
			}
		},
		"npm:astw@2.0.0": {
			"map": {
				"acorn": "npm:acorn@1.2.2"
			}
		},
		"npm:inline-source-map@0.6.2": {
			"map": {
				"source-map": "npm:source-map@0.5.6"
			}
		}
	}
});
