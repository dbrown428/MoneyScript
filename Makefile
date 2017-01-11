PROJECT = "money-script"

default: ;@echo "Building ${PROJECT}"; \
	  bin/build;

test: test-unit

clean: ;@echo "Cleaning ${PROJECT}"; \
	rm -fr build;
	rm -fr .nyc_output;
	rm -fr coverage;

test-unit: ;@echo "Unit Testing ${PROJECT}"; \
	node_modules/.bin/mocha --compilers ts:ts-node/register,tsx:ts-node/register --recursive -R dot "tests/unit/**/*.spec.ts"

coverage: ;@echo "Making Coverage for ${PROJECT}"; \
		rm -fr coverage;
	  node_modules/.bin/nyc npm t;

.PHONY: test test-unit coverage default