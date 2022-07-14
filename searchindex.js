Search.setIndex({"docnames": ["a1mediator", "background_cloud", "background_oran_architecture", "background_srsRAN", "example_xapp_deployment", "index", "kubectl_commands", "nextranslicing", "oaic_features", "oran_installation", "quickstart", "requirements", "setup5gnetwork", "srsRAN_additional_features", "srsRAN_installation", "undeploy_ric", "xapp_deployment", "xapp_example"], "filenames": ["a1mediator.rst", "background_cloud.rst", "background_oran_architecture.rst", "background_srsRAN.rst", "example_xapp_deployment.rst", "index.rst", "kubectl_commands.rst", "nextranslicing.rst", "oaic_features.rst", "oran_installation.rst", "quickstart.rst", "requirements.rst", "setup5gnetwork.rst", "srsRAN_additional_features.rst", "srsRAN_installation.rst", "undeploy_ric.rst", "xapp_deployment.rst", "xapp_example.rst"], "titles": ["A1 Mediator Installation Guide", "Background on Docker, Kubernetes &amp; Helm", "O-RAN Architecture", "RAN Architecture", "KPIMON xApp Deployment", "Welcome to OAIC\u2019s documentation!", "Kubectl Commands - Cheat Sheet", "NexRAN Slicing xApp Installation &amp; running in Kubernetes", "OAIC Features", "O-RAN Near-Real Time RIC Installation Guide", "Getting Started", "Hardware and Software Requirements", "Setup your own 5G Network", "srsRAN Additional Features", "srsRAN with E2 Agent Installation Guide", "UnDeploying RIC Platform", "xApp Deployment - General Guidelines", "Getting started: Developing xapps"], "terms": {"The": [0, 1, 4, 9, 12, 13, 14, 15, 16], "ran": [0, 4, 5, 8, 10, 12, 14, 17], "intellig": [0, 9, 17], "control": [0, 9, 10, 12, 17], "ric": [0, 4, 5, 7, 10, 11, 16, 17], "platform": [0, 1, 4, 5, 9, 12, 17], "s": [0, 1, 7, 8, 9, 12, 13, 14, 17], "compon": [0, 5, 9, 10, 12, 15], "listen": [0, 16, 17], "request": [0, 4, 16, 17], "sent": [0, 13, 17], "via": [0, 9, 13, 17], "http": [0, 4, 7, 9, 10, 11, 14, 16, 17], "northbound": 0, "interfac": [0, 9, 13, 14], "publish": [0, 17], "those": [0, 1, 9], "run": [0, 1, 4, 5, 9, 10, 13, 16, 17], "xapp": [0, 10, 12], "rmr": [0, 7, 9, 17], "messag": [0, 4, 9, 12, 17], "southbound": 0, "To": [0, 1, 9, 10, 13, 16, 17], "get": [0, 1, 5, 7, 9, 12, 13, 16], "clone": [0, 9, 10, 14, 17], "github": [0, 1, 10, 11, 17], "com": [0, 7, 9, 10, 11, 17], "openaicellular": [0, 10, 11], "plt": [0, 9, 11, 17], "There": [0, 4, 9, 16], "ar": [0, 1, 4, 9, 10, 12, 13, 16, 17], "two": [0, 9, 12, 14, 15, 17], "object": [0, 9], "associ": [0, 13], "defin": [0, 1, 9, 16], "name": [0, 1, 4, 7, 9, 12, 13, 16, 17], "descript": [0, 17], "most": [0, 9], "importantli": 0, "schema": [0, 17], "all": [0, 1, 4, 6, 9, 10, 12, 16, 17], "think": 0, "json": [0, 1, 4, 7, 16, 17], "do": [0, 1, 9, 12, 13, 14, 16, 17], "receiv": [0, 17], "us": [0, 1, 4, 5, 9, 10, 12, 16], "onli": [0, 1, 9, 14], "valid": [0, 9], "creation": [0, 9], "howev": 0, "must": [0, 13, 16], "regist": [0, 9, 17], "id": [0, 7, 12, 17], "descriptor": [0, 4, 16, 17], "develop": [0, 10], "can": [0, 1, 4, 6, 8, 9, 12, 13, 14, 16, 17], "also": [0, 1, 9, 10, 12, 13, 16, 17], "creat": [0, 1, 5, 7, 10, 12, 13, 14, 17], "new": [0, 1, 9, 12, 14, 17], "though": 0, "exact": 0, "process": [0, 1, 9, 10, 12], "where": [0, 1, 16], "store": [0, 1, 4, 9, 16], "still": [0, 9, 13], "tbd": 0, "For": [0, 1, 6, 9, 10, 12, 14, 17], "practic": 0, "purpos": [0, 10, 17], "when": [0, 1, 9, 12, 16], "need": [0, 1, 4, 9, 12, 13, 14, 16, 17], "invok": [0, 17], "load": [0, 9, 13], "befor": [0, 4, 9, 12, 13, 14], "sign": [0, 9], "up": [0, 1, 4, 9, 12, 13], "multipl": [0, 1, 5, 8, 9, 12, 14], "concret": 0, "instanti": 0, "thei": [0, 1, 9], "give": [0, 9], "valu": [0, 1, 9, 12, 17], "mai": [0, 1], "mani": [0, 1], "singl": [0, 1, 9, 12, 14], "whenev": 0, "over": [0, 9, 17], "see": [0, 4, 9, 12, 13, 14, 16], "below": [0, 9, 10, 13, 16, 17], "expect": 0, "handl": 0, "simultan": [0, 1], "each": [0, 1, 9, 13], "thi": [0, 4, 9, 10, 12, 13, 14, 16, 17], "list": [0, 1, 5, 7, 12, 17], "some": [0, 4, 9, 16], "between": [0, 1, 9, 13, 14], "here": [0, 4, 9, 12, 13, 14, 16], "date": 0, "2019": 0, "09": 0, "30": 0, "In": [0, 6, 9, 12, 13], "case": [0, 1, 9, 13, 16, 17], "defici": 0, "ahead": 0, "other": [0, 1, 9, 12, 13, 17], "doe": [0, 9, 13], "yet": [0, 1], "conform": 0, "recent": 0, "chang": [0, 1, 9, 12, 13, 17], "notion": 0, "aspect": 0, "quit": 0, "critic": 0, "intend": 0, "implement": [0, 14, 17], "same": [0, 9, 12], "often": 0, "moreov": 0, "without": [0, 9], "cannot": [0, 1, 13], "whether": [0, 12], "which": [0, 1, 9, 10, 13, 14, 16, 17], "a1m": 0, "thing": [0, 16], "set": [0, 1, 9, 13, 17], "call": [0, 1, 9, 17], "one": [0, 1, 4, 9, 12, 13, 14, 16], "more": [0, 1, 9, 10, 17], "against": 0, "current": [0, 1, 4, 12, 13, 16, 17], "provid": [0, 1, 4, 9, 10, 17], "mechan": 0, "know": 0, "correct": [0, 9], "sinc": [0, 1, 4, 9, 12], "them": [0, 4, 9, 16], "ha": [0, 1, 4, 9, 12, 13, 16, 17], "rather": 0, "larg": 0, "consequ": 0, "none": [0, 12, 17], "url": [0, 7, 16, 17], "match": 0, "rich": [0, 17], "statu": [0, 16, 17], "state": [0, 1, 9, 12, 16], "machin": [0, 1, 4, 12, 13, 14, 16], "actual": 0, "delet": [0, 4, 16], "point": [0, 4, 9, 16, 17], "referenc": 0, "404": 0, "configur": [0, 1, 5, 12, 14, 17], "option": [0, 12, 13, 14, 17], "deploi": [0, 1, 5, 6, 12, 16, 17], "cr": 0, "come": [0, 8, 10, 14], "patch": [0, 9], "partial": 0, "updat": [0, 10, 12, 13, 14], "team": 0, "agre": 0, "remov": [0, 1, 9, 13], "later": 0, "version": [0, 1, 7, 9, 10, 13, 14, 16, 17], "have": [0, 1, 4, 9, 13, 14, 16], "oper": [0, 1, 11, 14, 17], "put": [0, 7], "bodi": 0, "exactli": 0, "scope": [0, 10], "statement": 0, "block": [0, 10, 13], "veri": [0, 9, 14], "close": 0, "otherwis": [0, 4, 16], "i": [0, 4, 7, 12, 13], "would": [0, 6, 17], "argu": 0, "redund": 0, "exampl": [0, 1, 4, 6, 9, 12, 16, 17], "kei": [0, 1, 4, 9], "insid": [0, 9, 13], "an": [0, 1, 4, 5, 6, 10, 12, 16, 17], "alreadi": [0, 4, 9, 12, 13, 14], "notifi": 0, "extern": [0, 5, 9, 17], "client": [0, 12, 17], "status": 0, "queri": [0, 17], "should": [0, 4, 9, 12, 13, 16], "return": [0, 17], "full": [0, 14, 17], "right": 0, "now": [0, 4, 9, 12, 13, 16, 17], "assum": [0, 9, 12, 13], "subsequ": 0, "fetch": 0, "document": [0, 14, 17], "detail": [0, 9, 14], "specif": [0, 9, 14], "allow": [0, 1, 9, 13], "section": [0, 4, 9, 16, 17], "4": [0, 5, 7, 17], "2": [0, 7, 12, 13], "6": [0, 9], "we": [0, 1, 4, 9, 10, 12, 13, 14, 15, 16, 17], "believ": 0, "so": [0, 1, 9, 12, 13], "quickli": 0, "becom": [0, 1, 5], "stale": 0, "major": [0, 9, 11], "failur": 0, "solut": 0, "sdl": [0, 17], "librari": [0, 1, 10], "persist": [0, 1, 9, 17], "inform": [0, 1, 4, 13, 14, 17], "includ": [0, 1, 9, 12, 14], "If": [0, 4, 9, 12, 13, 16, 17], "built": [0, 16], "fail": [0, 17], "restart": [0, 1, 9, 12, 15, 17], "lost": 0, "tini": 0, "bit": 0, "volatil": 0, "its": [0, 1, 9, 12], "next": [0, 4, 9, 16], "second": [0, 1, 12], "job": [0, 9], "queue": [0, 9], "memori": 0, "thread": 0, "poll": 0, "everi": [0, 10], "dequeu": 0, "perform": [0, 4, 5, 9, 10, 16, 17], "were": 0, "kill": [0, 12], "time": [0, 5, 10, 11, 13, 17], "you": [0, 1, 4, 9, 10, 12, 13, 14, 16], "could": [0, 16], "mean": [0, 9], "wouldn": 0, "t": [0, 4, 7, 9, 10, 12, 14, 16], "take": [0, 9], "isn": 0, "drastic": 0, "idempot": 0, "alwai": [0, 9], "re": [0, 5, 9, 13], "order": [0, 9], "consid": 0, "complet": [0, 4, 9], "move": [0, 17], "redi": 0, "backend": [0, 17], "nativ": [0, 9, 14], "support": [0, 5, 9, 13, 14], "lpush": 0, "rpop": 0, "ve": [0, 9, 10], "ask": 0, "extens": 0, "follow": [0, 4, 6, 9, 10, 12, 13, 16, 17], "launch": 0, "behavior": 0, "a1_rmr_retry_tim": 0, "number": [0, 1], "timeout": 0, "send": [0, 1, 9, 17], "retri": 0, "503": 0, "default": [0, 4, 9, 12, 13, 16, 17], "instance_delete_no_resp_ttl": 0, "pleas": [0, 4, 9, 10, 13, 14], "refer": [0, 12, 17], "flowchart": 0, "doc": [0, 9, 17], "t1": 0, "5": [0, 9, 14], "basic": [0, 1, 9, 13, 17], "wait": 0, "databas": [0, 9, 12, 17], "after": [0, 9, 17], "downstream": 0, "app": [0, 1, 4, 6, 7, 9, 16, 17], "respond": [0, 9], "instance_delete_resp_ttl": 0, "t2": 0, "use_fake_sdl": 0, "test": [0, 10, 13, 14, 17], "featur": [0, 1, 14], "dbaa": 0, "fals": [0, 9], "prometheus_multiproc_dir": 0, "directori": [0, 4, 10, 12, 14, 16], "prometheu": [0, 9, 17], "gather": 0, "metric": [0, 4, 13, 17], "tmp": 0, "offici": 0, "helm": [0, 5, 11, 16, 17], "chart": [0, 1, 7, 9, 16, 17], "repositori": [0, 1, 7, 9, 10, 13, 14, 16, 17], "hold": 0, "integration_test": 0, "integr": [0, 8, 10, 12, 14], "discuss": 0, "abov": [0, 9, 13, 17], "docker": [0, 5, 7, 11, 17], "cli": [0, 5, 17], "cach": 0, "latest": [0, 9, 10, 17], "depend": [0, 1, 10, 13, 17], "companion": [0, 5, 14], "conveni": 0, "shown": [0, 9], "mock": 0, "servic": [0, 4, 5, 7, 9, 12, 16, 17], "sampl": [0, 14], "rout": [0, 9, 13, 17], "tabl": [0, 13, 14], "suppli": 0, "file": [0, 1, 5, 7, 9, 10, 12, 14, 17], "rt": [0, 4, 8, 15, 17], "mount": 0, "volum": [0, 9], "command": [0, 1, 5, 12, 13, 17], "both": [0, 1, 9, 10, 12], "e": [0, 8, 9, 11, 17], "true": [0, 7, 9, 12, 17], "p": [0, 7, 9, 14], "10000": 0, "v": [0, 9, 10], "path": [0, 17], "opt": [0, 4], "A": [0, 1, 4, 6, 9, 13, 16], "web": [0, 4], "user": [0, 1, 9, 10, 14], "gener": [0, 5, 9, 12, 17], "openapi": 0, "access": [0, 1, 4, 8, 9, 10, 13, 16], "host": [0, 1, 5, 12, 14], "ip": [0, 4, 7, 9, 12, 13, 16, 17], "ui": 0, "intern": [0, 12], "server": [0, 1, 4, 5, 9, 12, 17], "error": [0, 13, 16, 17], "storag": [0, 1, 9, 17], "data": [0, 4, 7, 9, 12, 13, 16, 17], "layer": 0, "avail": [0, 9, 17], "been": [0, 4, 16], "curl": [0, 4, 7, 16, 17], "healthcheck": 0, "instruct": [0, 1, 4, 9, 12, 13, 14, 17], "visit": 0, "o": [0, 4, 5, 6, 7, 8, 10, 12, 14, 16, 17], "sc": [0, 9, 11, 17], "org": [0, 9, 17], "project": [0, 9, 10, 14, 17], "en": [0, 5, 9, 17], "index": [0, 5, 17], "html": [0, 9, 17], "manag": [1, 9, 17], "side": 1, "isol": 1, "environ": [1, 9, 10, 17], "everyth": 1, "applic": [1, 4, 7, 9, 14, 16, 17], "better": [1, 10], "comput": [1, 11], "densiti": 1, "reli": 1, "what": [1, 16], "instal": [1, 4, 10, 16], "secur": [1, 9], "given": [1, 4, 9, 13, 16], "differ": [1, 9, 10, 12, 14, 17], "virtual": [1, 13, 14], "wai": [1, 12], "os": [1, 9], "workload": [1, 9], "instanc": [1, 17], "With": 1, "vm": [1, 5, 12, 14], "hardwar": [1, 5, 9], "being": 1, "build": [1, 4, 7, 10, 14, 16, 17], "agil": 1, "softwar": [1, 5, 8, 10, 14], "deliveri": 1, "pipelin": 1, "ship": 1, "faster": 1, "repeat": 1, "linux": [1, 9, 17], "window": [1, 9, 12, 13], "read": [1, 9, 17], "templat": 1, "base": [1, 8, 11, 12, 13, 17], "custom": [1, 9, 16], "execut": [1, 9, 12, 13], "sourc": [1, 5, 13, 17], "code": [1, 5, 7, 9], "well": [1, 10], "tool": [1, 9], "encapsul": 1, "runnabl": 1, "lightweight": 1, "standalon": 1, "packag": [1, 9, 13, 17], "runtim": [1, 17], "system": [1, 8, 13, 14, 17], "resourc": [1, 9, 17], "unless": 1, "addit": 1, "variabl": [1, 16], "within": [1, 4, 9, 10, 16], "specifi": [1, 9, 12], "much": [1, 17], "smaller": 1, "than": 1, "spun": 1, "matter": 1, "result": [1, 4], "ani": [1, 9, 16], "disappear": 1, "download": [1, 4, 7, 16, 17], "either": [1, 9], "local": [1, 4, 7, 9, 13, 16, 17], "public": 1, "like": [1, 6, 10], "hub": 1, "similar": [1, 9, 13], "collabor": [1, 10], "push": [1, 7, 9, 16], "pull": [1, 9], "from": [1, 4, 7, 9, 12, 16, 17], "requir": [1, 5, 10, 13, 14], "text": 1, "how": [1, 5, 9, 17], "underli": [1, 9], "along": 1, "languag": [1, 17], "environment": 1, "locat": [1, 4, 16, 17], "network": [1, 4, 5, 9, 10, 13, 14], "port": [1, 13, 17], "onc": [1, 4, 9, 12, 13, 16, 17], "open": [1, 9, 10, 14], "autom": 1, "deploy": [1, 10, 11, 15], "scale": 1, "across": [1, 9], "cluster": [1, 17], "centric": 1, "infrastructur": [1, 10], "It": [1, 12], "enabl": [1, 4, 7, 9, 10, 13, 14, 16], "auto": 1, "placement": [1, 9], "replic": [1, 9], "might": 1, "cloud": [1, 9, 16], "aw": 1, "ec2": 1, "physic": [1, 13], "pod": [1, 4, 5, 9, 16, 17], "equival": 1, "yum": 1, "apt": [1, 9, 13, 14, 16], "seen": [1, 9], "pip": [1, 13], "python": [1, 13], "just": [1, 9], "similarli": 1, "understand": [1, 9, 10], "yaml": [1, 9, 17], "anoth": [1, 9], "markup": 1, "help": [1, 9, 10], "type": [1, 4, 7, 12, 16, 17], "format": [1, 13], "label": 1, "metadata": [1, 4, 6, 7, 9, 12, 16], "info": [1, 10, 17], "link": [1, 7, 10, 12, 13, 17], "fire": 1, "bunch": 1, "constitut": 1, "tiller": [1, 9], "go": [4, 9, 16], "step": [4, 10, 13, 16], "proceed": 4, "As": 4, "indic": [4, 9, 12, 13, 16], "genral": 4, "guidelin": [4, 5], "first": [4, 9, 10, 12, 13, 15, 16, 17], "continu": 4, "copi": [4, 7, 16], "reload": [4, 16], "nginx": 4, "done": [4, 9, 13, 16, 17], "sudo": [4, 6, 7, 9, 12, 13, 14, 16], "cp": [4, 16], "scp": [4, 15, 16], "var": [4, 16, 17], "www": [4, 9, 10, 16], "xapp_config": [4, 16], "config_fil": [4, 16], "systemctl": [4, 16], "newli": [4, 9, 16], "place": [4, 16], "want": [4, 12, 16], "export": [4, 7, 12, 14, 16, 17], "machine_ip": 4, "hostnam": [4, 9, 12], "cut": [4, 12], "f1": [4, 12], "d": [4, 7, 9, 12, 16, 17], "5010": [4, 7, 16], "make": [4, 9, 12, 13, 14, 16, 17], "possibl": 4, "cd": [4, 9, 10, 14, 16, 17], "registri": [4, 9, 16], "5008": [4, 16], "1": [4, 5, 7, 11, 12, 13, 16, 17], "0": [4, 6, 7, 9, 12, 14, 16, 17], "essenti": [4, 9, 14, 16], "5g": [4, 5, 8, 10, 11, 14], "subscript": 4, "procedur": 4, "success": [4, 9, 12, 13], "readi": [4, 16, 17], "repres": [4, 9], "address": [4, 9, 12, 13, 16], "kong_proxi": [4, 7, 16], "kubectl": [4, 5, 7, 9, 12, 15, 16, 17], "svc": [4, 6, 7, 9, 12, 16, 17], "n": [4, 6, 7, 9, 11, 12, 15, 16, 17], "ricplt": [4, 6, 7, 9, 12, 16, 17], "l": [4, 6, 7, 9, 16], "kubernet": [4, 5, 11, 16, 17], "io": [4, 7, 9, 16], "kong": [4, 7, 16], "jsonpath": [4, 6, 7, 9, 12, 16], "item": [4, 6, 7, 9, 12, 16], "spec": [4, 6, 7, 9, 12, 16], "clusterip": [4, 6, 7, 9, 12, 16, 17], "appmgr_http": [4, 7, 16], "field": [4, 6, 7, 9, 12, 16], "selector": [4, 6, 7, 9, 12, 16], "appmgr": [4, 7, 16, 17], "onboarder_http": [4, 7, 16], "good": [4, 16], "exist": [4, 9, 10, 16], "proce": [4, 16, 17], "forward": [4, 13, 16], "32080": [4, 7, 16, 17], "api": [4, 7, 9, 16, 17], "v1": [4, 7, 9, 16, 17], "ngnix": [4, 16], "vim": [4, 16], "past": [4, 16], "substitu": [4, 16], "machine_ip_addr": [4, 16], "your": [4, 5, 9, 13, 14, 16], "find": [4, 12, 16], "out": [4, 9, 10, 16], "through": [4, 9, 12, 16], "ifconfig": [4, 12, 13, 16], "json_url": [4, 7, 16], "save": [4, 13, 16], "x": [4, 7, 11, 13, 16], "post": [4, 7, 9, 16, 17], "header": [4, 7, 16, 17], "content": [4, 7, 12, 16, 17], "binari": [4, 7, 9, 14, 16, 17], "raw": [4, 7, 16, 17], "xappnam": [4, 7, 16, 17], "ricxapp": [4, 6, 7, 15, 16, 17], "namespac": [4, 6, 9, 12, 16, 17], "log": [4, 5, 7, 9, 12, 16, 17], "f": [4, 6, 7, 9, 16, 17], "e2": [4, 5, 8, 11, 12, 13, 17], "node": [4, 9], "kpm": [4, 14], "function": [4, 9], "abl": [4, 13], "subscrib": 4, "start": [4, 5, 9, 12, 14], "decod": [4, 17], "contain": [4, 9, 13], "about": 4, "view": [4, 5, 9, 17], "exec": [4, 6, 7, 12], "tail": 4, "introduct": [5, 9], "structur": [5, 17], "contributor": 5, "research": 5, "paper": 5, "mail": 5, "Near": [5, 10, 11], "real": [5, 10, 11], "cellular": [5, 10, 11, 14], "stack": [5, 9, 11, 14], "core": [5, 12, 14], "architectur": [5, 10, 17], "guid": [5, 17], "pre": [5, 13], "requisit": 5, "srsran": [5, 8, 10, 11, 12], "agent": [5, 7, 8, 12], "zeromq": [5, 8, 13], "uhd": 5, "asn1c": 5, "compil": 5, "setup": [5, 6, 13, 14], "own": [5, 9], "epc": [5, 13], "gnb": [5, 14], "ue": [5, 7, 8, 14], "mode": 5, "usrp": [5, 8, 11, 14], "kpimon": [5, 15, 16], "config": [5, 7, 12, 17], "imag": [5, 13, 17], "onboard": [5, 7], "dm": [5, 17], "undeploi": [5, 9], "un": 5, "simul": [5, 8, 12, 14], "gnu": [5, 8, 12, 14], "radio": [5, 8, 10, 11, 12, 14], "connect": [5, 9], "internet": 5, "virtualbox": 5, "enhanc": 5, "tip": 5, "trick": 5, "cot": 5, "cheat": 5, "sheet": 5, "check": [5, 9, 10, 12, 13, 16, 17], "modul": [5, 9], "search": 5, "page": [5, 14], "particular": [6, 12], "ricinfra": [6, 9], "pod_nam": 6, "our": [6, 9, 10, 16], "look": [6, 14], "e2mgr": [6, 7, 9], "service_nam": 6, "e2mgr_http": 7, "e2term_sctp": 7, "e2term": [7, 9, 12], "sctp": [7, 9, 12], "alpha": [7, 9, 12], "rtmgr_http": 7, "rtmgr": 7, "dockerfil": [7, 9, 16, 17], "8080": [7, 17], "tag": [7, 9, 16], "localhost": [7, 9, 12], "sh": [7, 9, 13, 14], "powder": [7, 14], "cdn": 7, "123": 7, "anonfil": 7, "rfn702bdu5": 7, "6ebc2dd4": 7, "1628643253": 7, "per": [7, 9], "line": [7, 17], "91": 7, "xget": 7, "xpost": 7, "home": [7, 12], "pratheek": 7, "kumar": 7, "srslte": [7, 14], "srsepc": [7, 12, 13, 14], "src": 7, "spgw": 7, "sgi_if_addr": 7, "192": [7, 13], "168": [7, 13], "srsenb": [7, 13, 14], "enb": [7, 12, 13, 14], "n_prb": [7, 12], "15": [7, 9, 12], "enb1": [7, 12], "enb_id": [7, 12], "0x19b": [7, 12], "rf": [7, 12], "device_nam": [7, 12], "zmq": [7, 12], "device_arg": [7, 12], "fail_on_disconnect": [7, 12], "base_sr": [7, 12], "23": [7, 12], "04e6": [7, 12], "tx_port": 7, "tcp": [7, 12, 13, 17], "2000": [7, 12], "rx_port": 7, "2001": [7, 12], "remote_ipv4_addr": [7, 12], "all_level": [7, 12], "warn": [7, 12], "log_level": [7, 12], "debug": [7, 12, 14], "filenam": [7, 12], "stdout": [7, 12], "slicer": 7, "workshar": 7, "netn": [7, 12], "add": [7, 12, 13, 14], "ue1": [7, 12], "srsue": [7, 13, 14], "usim": 7, "algo": 7, "xor": 7, "imsi": [7, 12], "001010123456789": 7, "k": 7, "00112233445566778899aabbccddeeff": 7, "imei": 7, "353490069873310": 7, "gw": [7, 12, 13, 14], "nexran_xapp": 7, "echo": 7, "8000": [7, 12], "iperf": [7, 12], "36000": 7, "c": [7, 9, 10, 12, 13], "bin": [7, 9], "sleepint": 7, "nodeb": 7, "sleep": 7, "h": 7, "411": 7, "mcc": 7, "001": 7, "mnc": 7, "01": [7, 14], "fast": 7, "allocation_polici": 7, "proport": 7, "share": [7, 9], "1024": 7, "slow": 7, "256": 7, "bind": [7, 14], "enb_macro_001_001_0019b0": 7, "001010123456788": 7, "invert": 7, "prioriti": 7, "commun": [8, 9, 10, 12], "compliant": 8, "releas": [8, 9, 11, 12, 13], "nsa": [8, 12, 14], "interact": [8, 17], "osc": [8, 9], "ettu": [8, 14], "cornet": 8, "testb": 8, "soon": [8, 10, 14], "kpi": 8, "monitor": 8, "20": [9, 11, 14], "04": [9, 11, 14], "lt": 9, "bionic": 9, "beaver": 9, "cpu": [9, 14], "vcpu": 9, "ram": 9, "16": [9, 12, 13], "gb": 9, "160": 9, "prefer": 9, "recommend": [9, 17], "power": 9, "enough": 9, "10": [9, 11, 13, 14], "video": [9, 10], "begin": [9, 14], "parent": [9, 14], "oaic": [9, 14], "outlin": [9, 12, 14, 15], "realtim": 9, "spread": 9, "onto": 9, "separ": [9, 12], "auxiliari": 9, "aux": [9, 17], "respect": [9, 16], "consist": [9, 17], "kube": 9, "ns": [9, 17], "framework": [9, 10], "mainten": 9, "script": [9, 13], "demo": 9, "k8": [9, 17], "simpl": [9, 16, 17], "master": [9, 11], "slave": 9, "cover": [9, 17], "automat": 9, "paramet": 9, "privat": 9, "etc": [9, 16, 17], "infra": 9, "rc": 9, "cni": 9, "left": [9, 17], "unspecifi": 9, "env": 9, "normal": 9, "special": 9, "self": 9, "certif": 9, "resolv": 9, "entri": [9, 17], "openstack": 9, "relev": 9, "flexibl": 9, "ever": 9, "output": [9, 13, 17], "shell": 9, "1node": 9, "init": [9, 10], "k_1_16": 9, "h_2_17": 9, "d_cur": 9, "v2": [9, 17], "17": 9, "gen": 9, "internetwork": 9, "replac": 9, "reboot": 9, "upon": 9, "approx": 9, "min": 9, "back": [9, 17], "total": [9, 17], "9": [9, 14], "These": 9, "serv": 9, "briefli": 9, "coredn": 9, "dn": [9, 13], "flannel": 9, "overlai": 9, "work": [9, 17], "assign": [9, 12, 13], "rang": 9, "subnet": 9, "usual": [9, 13], "ipv4": 9, "facilit": [9, 10, 17], "inter": 9, "traffic": [9, 13], "transport": 9, "etcd": 9, "maintain": 9, "map": [9, 17], "alloc": 9, "try": 9, "highli": 9, "dictionari": 9, "apiserv": 9, "plane": 9, "expos": 9, "front": 9, "end": 9, "accordingli": 9, "proxi": 9, "iptabl": 9, "rule": [9, 17], "static": 9, "endpoint": 9, "balanc": 9, "goe": 9, "down": 9, "remain": 9, "schedul": 9, "watch": [9, 10, 17], "select": 9, "determin": 9, "accord": 9, "constraint": 9, "collect": [9, 17], "polici": [9, 17], "interfer": 9, "deadlin": 9, "respons": [9, 12], "notic": 9, "off": 9, "task": 9, "portion": 9, "typic": 9, "discontinu": 9, "v3": 9, "wa": 9, "risk": 9, "But": [9, 12], "persistentvolum": 9, "class": 9, "doesn": 9, "three": [9, 17], "nf": 9, "common": 9, "stabl": 9, "provision": 9, "storageclass": 9, "annot": 9, "again": [9, 12], "resid": 9, "area": 9, "super": 9, "permiss": 9, "5001": 9, "5000": 9, "image_nam": 9, "image_tag": 9, "navig": 9, "repo": [9, 17], "adapt": [9, 13], "vespa": 9, "smo": 9, "exchang": 9, "accept": 9, "note": 9, "nodeport": 9, "while": [9, 12, 13], "recipe_exampl": 9, "example_recipe_oran_e_release_modified_e2": 9, "recip": 9, "import": [9, 12, 13, 17], "concept": 9, "group": 9, "site": [9, 16], "bronz": 9, "cherri": 9, "dawn": 9, "benefit": 9, "seamless": 9, "suit": [9, 14], "instead": 9, "previou": [9, 13, 16], "present": 9, "privilegedmod": 9, "hostnetworkmod": 9, "print": 9, "messagecollectorfil": 9, "outgo": 9, "datavols": 9, "100mi": 9, "storageclassnam": 9, "pizpub": 9, "click": [9, 13], "undeploy": 9, "correspond": 9, "submodul": [9, 10], "rest": [9, 17], "non": 9, "readm": [9, 17], "md": [9, 17], "youtub": [9, 10], "x5mhydijwmc": 9, "dep": [9, 17], "engin": 9, "educ": 9, "aquasec": 9, "academi": 9, "overview": 9, "digitalocean": 9, "tutori": [9, 13, 14], "7": 9, "velotio": 9, "blog": 9, "fabric": 9, "8": [9, 13], "sookocheff": 9, "model": 9, "administr": 9, "effort": 10, "led": 10, "consortium": 10, "academ": 10, "institut": 10, "fulli": 10, "toolset": 10, "encompass": 10, "ai": 10, "spur": 10, "leverag": 10, "extend": [10, 14], "industri": 10, "standard": [10, 17], "futur": [10, 17], "rst": 10, "lmui8hqkdyg": 10, "315": 10, "r9gcbwslzjw": 10, "1s": 10, "dwhrvluswaq": 10, "git": [10, 14, 17], "root": [10, 16], "recurs": 10, "remot": 10, "gbp": 11, "nic": [11, 13], "sdr": [11, 12, 14], "g": 11, "x310": 11, "n310": 11, "ubuntu": [11, 14], "oran": 11, "tree": 11, "e_rel_xapp_onboarder_support": 11, "termin": [11, 12], "a1": [11, 17], "mediat": 11, "suffic": 12, "bring": 12, "sure": [12, 13, 14, 16, 17], "e2node_ip": 12, "e2node_port": 12, "5006": 12, "e2term_ip": 12, "50": 12, "tx_port0": 12, "rx_port0": 12, "tx_port1": 12, "2100": 12, "rx_port1": 12, "2101": 12, "local_ipv4_addr": 12, "local_port": 12, "successfulli": [12, 13, 17], "consol": 12, "initi": [12, 17], "establish": 12, "rrc": [12, 13], "nr": 12, "reconfigur": 12, "confirm": 12, "cell": 12, "lte": 12, "On": [12, 13], "relat": 12, "user_db": 12, "csv": 12, "modif": 12, "exit": 12, "simplest": 12, "space": 12, "172": [12, 13], "ue_ip": 12, "issu": 12, "scenario": 12, "udp": 12, "10mbp": 12, "60": 12, "b": 12, "10m": 12, "x300": 12, "clock": 12, "sampling_r": 12, "11": 12, "52e6": 12, "lo_freq_offset_hz": 12, "send_frame_s": 12, "recv_frame_s": 12, "num_send_fram": 12, "64": 12, "num_recv_fram": 12, "input": [12, 13], "found": [12, 13, 17], "srate": 12, "rat": 12, "band": [12, 13], "3": [12, 14], "nof_carri": 12, "youhav": 12, "ad": 12, "addr": 12, "ip_aadress_of_usrp": 12, "argument": [12, 13], "directli": [12, 17], "ue_ip_addr": 12, "grc": 13, "manipul": 13, "visual": 13, "q": 13, "compat": 13, "transmit": 13, "broker": 13, "act": 13, "channel": 13, "flow": 13, "uninstal": 13, "gnuradio": 13, "ppa": [13, 14], "python3": 13, "increas": 13, "volk_profil": 13, "encount": 13, "masquerad": 13, "srsepc_if_masq": 13, "translat": 13, "pass": 13, "boot": 13, "ref": 13, "identifi": 13, "kernel": 13, "destin": 13, "gatewai": 13, "genmask": 13, "flag": 13, "ifac": 13, "ug": 13, "600": 13, "wlp2s0": 13, "255": 13, "u": 13, "100": [13, 17], "enp0s3": 13, "1000": 13, "masq": 13, "wifi": 13, "plug": 13, "obtain": 13, "tun_srsu": 13, "ping": 13, "sgi": 13, "That": 13, "googl": 13, "10g": 13, "usb3": 13, "fpga": 13, "secondari": 13, "tab": 13, "adpat": 13, "leav": 13, "alon": 13, "attach": [13, 17], "choos": 13, "bridg": 13, "direct": 13, "Then": 13, "visibl": 13, "enp0s8": 13, "24": 13, "dev": [13, 14, 17], "uhd_find_devic": 13, "4g": 14, "sr": 14, "modifi": 14, "21": 14, "sa": 14, "enodeb": 14, "light": 14, "weight": 14, "mme": 14, "hss": 14, "licens": [14, 17], "ghz": 14, "frontend": 14, "At": 14, "least": 14, "cmake": 14, "libfftw3": 14, "libmbedtl": 14, "libboost": 14, "program": 14, "libconfig": 14, "libsctp": 14, "libtool": 14, "autoconf": 14, "transfer": 14, "approach": 14, "ci": 14, "teach": 14, "demonstr": [14, 17], "libzmq3": 14, "don": 14, "manual": 14, "ettusresearch": 14, "libuhd": 14, "libuhd4": 14, "cn": 14, "air": 14, "oai": 14, "gitlab": 14, "eurecom": 14, "fr": 14, "checkout": [14, 17], "velichkov_s1ap_plus_option_group": 14, "autoreconf": 14, "iv": 14, "j": 14, "nproc": 14, "ldconfig": 14, "mkdir": [14, 16], "realpath": 14, "dcmake_build_typ": 14, "relwithdebinfo": 14, "dric_generated_e2ap_binding_dir": 14, "e2_bind": 14, "e2ap": 14, "v01": 14, "dric_generated_e2sm_kpm_binding_dir": 14, "e2sm": 14, "dric_generated_e2sm_gnb_nrt_binding_dir": 14, "nrt": 14, "srsran_install_config": 14, "forc": 14, "rollout": 15, "method": [15, 17], "webserv": 16, "activ": 16, "unlink": 16, "conf": 16, "default_serv": 16, "server_nam": 16, "path_to_config_fil": 16, "uniqu": 16, "xappkpimon": 16, "keep": 16, "too": 16, "edit": 16, "previous": 16, "verifi": 16, "describ": 17, "write": 17, "writer": 17, "wiki": 17, "17269011": 17, "xapp_writer_s_guide_v2": 17, "pdf": 17, "modificationd": 17, "1625642899082": 17, "easier": 17, "construct": 17, "sever": 17, "skeleton": 17, "design": 17, "rapid": 17, "figur": 17, "depict": 17, "high": 17, "level": 17, "loos": 17, "scratch": 17, "rapidli": 17, "fledg": 17, "illustr": 17, "prerequisit": 17, "inject": 17, "dynam": 17, "filter": 17, "popul": 17, "mdclog": 17, "trace": 17, "asn": 17, "encod": 17, "health": 17, "probe": 17, "db": 17, "rnib": 17, "uenib": 17, "statist": 17, "met": 17, "scrap": 17, "counter": 17, "gerrit": 17, "r": 17, "admin": 17, "written": 17, "aim": 17, "rais": 17, "alarm": 17, "intereact": 17, "show": 17, "hwapp": 17, "main": 17, "pkg": 17, "struct": 17, "a1_policy_queri": 17, "20013": 17, "policy_query_payload": 17, "policy_type_id": 17, "20000": 17, "func": 17, "sendpolicyqueri": 17, "logger": 17, "prepar": 17, "rmrparam": 17, "mtype": 17, "payload": 17, "byte": 17, "flg": 17, "sendmsg": 17, "els": 17, "configchangehandl": 17, "string": 17, "xappstartcb": 17, "consum": 17, "msg": 17, "err": 17, "getricmessagenam": 17, "meid": 17, "subid": 17, "txid": 17, "len": 17, "rannam": 17, "xid": 17, "payloadlen": 17, "switch": 17, "handler": 17, "a1_policy_request": 17, "reciv": 17, "ric_health_check_req": 17, "unknown": 17, "discard": 17, "defer": 17, "free": 17, "mbuf": 17, "nil": 17, "mdc": 17, "setmdc": 17, "addconfigchangelisten": 17, "callback": 17, "setreadycb": 17, "waitforsdl": 17, "getbool": 17, "runwithparam": 17, "optiuon": 17, "mirror": 17, "last": 17, "offer": 17, "util": 17, "chartmusem": 17, "folder": 17, "txt": 17, "uta_rtg": 17, "mod": 17, "sum": 17, "helm3": 17, "One": 17, "availab": 17, "proceur": 17, "chart_repo_url": 17, "fine": 17, "config_file_path": 17, "shcema_file_path": 17, "httpget": 17, "readinessprob": 17, "tojson": 17, "initialdelaysecond": 17, "periodsecond": 17, "livenessprob": 17, "onbord": 17, "apivers": 17, "appvers": 17, "tgz": 17, "2021": 17, "06": 17, "24t18": 17, "57": 17, "41": 17, "98056196z": 17, "digest": 17, "14a484d9a394ed34eab66e5241ec33e73be8fa70a2107579d19d037f2adf57a0": 17, "wish": 17, "ver": 17, "helmvers": 17, "null": 17, "po": 17, "ag": 17, "55ff7549df": 17, "kpj6k": 17, "2m": 17, "ip1": 17, "80": 17, "443": 17, "73d": 17, "ip2": 17, "103m": 17, "ip3": 17, "4560": 17, "4561": 17, "jq": 17, "xferd": 17, "averag": 17, "speed": 17, "dload": 17, "upload": 17, "spent": 17, "347": 17, "578": 17, "579": 17, "rxmessag": 17, "ric_sub_resp": 17, "a1_policy_req": 17, "txmessag": 17, "ric_sub_req": 17, "a1_policy_resp": 17, "ric_health_check_resp": 17}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"a1": 0, "mediat": 0, "instal": [0, 5, 7, 9, 13, 14, 17], "guid": [0, 9, 14], "overview": [0, 17], "code": [0, 10, 17], "polici": 0, "type": 0, "instanc": 0, "known": 0, "differ": 0, "from": [0, 13, 14], "1": [0, 9, 14], "0": [0, 13], "spec": 0, "resili": 0, "environ": 0, "variabl": [0, 4], "kubernet": [0, 1, 6, 7, 9], "deploy": [0, 4, 5, 9, 16, 17], "local": 0, "build": [0, 9], "imag": [0, 1, 4, 9, 16], "start": [0, 10, 17], "contain": [0, 1], "view": [0, 6], "api": 0, "check": [0, 4, 6], "health": 0, "background": [1, 5], "docker": [1, 4, 9, 16], "helm": [1, 4, 9], "core": 1, "compon": [1, 11, 17], "registri": 1, "dockerfil": 1, "o": [2, 9, 11], "ran": [2, 3, 9, 11], "architectur": [2, 3, 9], "kpimon": 4, "xapp": [4, 5, 7, 8, 15, 16, 17], "host": [4, 9, 16], "config": [4, 16], "file": [4, 16], "creat": [4, 9, 16], "onboard": [4, 16, 17], "get": [4, 6, 10, 14, 17], "chart": 4, "url": 4, "deploi": [4, 9, 15], "verifi": 4, "welcom": 5, "oaic": [5, 8, 10], "s": 5, "document": 5, "inform": 5, "procedur": [5, 7, 9], "addit": [5, 13], "featur": [5, 8, 13], "indic": 5, "tabl": 5, "kubectl": 6, "command": [6, 9], "cheat": 6, "sheet": 6, "pod": 6, "servic": 6, "log": 6, "run": [6, 7, 12], "full": 6, "name": 6, "ip": 6, "offer": 6, "nexran": 7, "slice": 7, "srsran": [7, 13, 14], "Near": [8, 9], "real": [8, 9], "time": [8, 9], "ric": [8, 9, 12, 15], "cellular": 8, "stack": 8, "support": [8, 17], "pre": [9, 14, 16], "requisit": [9, 14, 16], "system": [9, 11], "requir": [9, 11], "softwar": [9, 11, 17], "step": 9, "configur": [9, 13, 16], "an": [9, 13], "ubuntu": 9, "machin": 9, "virtual": 9, "vm": [9, 13], "2": 9, "cluster": 9, "onetim": 9, "setup": [9, 12], "influxdb": 9, "3": [9, 13], "modifi": 9, "e2": [9, 14], "relat": 9, "termin": 9, "4": [9, 14], "structur": [9, 10], "directori": 9, "refer": 9, "introduct": 10, "how": 10, "becom": 10, "contributor": 10, "sourc": [10, 14], "research": 10, "paper": 10, "mail": 10, "list": 10, "hardwar": 11, "integr": 11, "solut": 11, "each": 11, "ue": [11, 12, 13], "os": 11, "packag": [11, 14], "framework": [11, 17], "your": 12, "own": 12, "5g": 12, "network": 12, "epc": 12, "en": 12, "gnb": 12, "zeromq": [12, 14], "mode": 12, "connect": [12, 13], "rt": 12, "srsenb": 12, "srsue": 12, "exchang": 12, "traffic": 12, "ping": 12, "uplink": 12, "downlink": 12, "iperf3": 12, "side": 12, "usrp": [12, 13], "uhd": [12, 13, 14], "x310": [12, 13], "test": 12, "multipl": 13, "simul": 13, "us": [13, 14, 17], "gnu": 13, "radio": 13, "companion": 13, "binari": 13, "extern": 13, "server": [13, 16], "internet": 13, "virtualbox": 13, "b210": 13, "b": 13, "205": 13, "mini": 13, "over": 13, "usb": 13, "n310": 13, "through": 13, "ethernet": 13, "todo": [13, 14], "perform": 13, "enhanc": 13, "tip": 13, "trick": 13, "cot": 13, "agent": 14, "depend": 14, "develop": [14, 17], "librari": 14, "manag": 14, "asn1c": 14, "compil": 14, "undeploi": 15, "platform": 15, "un": 15, "re": 15, "gener": 16, "guidelin": 16, "web": 16, "nginx": 16, "dm": 16, "cli": 16, "The": 17, "frame": 17, "common": 17, "function": 17, "interfac": 17, "go": 17, "variou": 17, "essenti": 17, "hello": 17, "world": 17, "hw": 17, "dms_cli": 17, "tool": 17}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 56}})