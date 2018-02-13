var searchIndex = {};
searchIndex["rusty_secrets"] = {"doc":"`RustySecrets` implements Shamir's secret sharing in Rust. It provides the possibility to sign shares.","items":[[0,"errors","rusty_secrets","Define the various error kinds specific to deterministic secret sharing.",null,null],[3,"Error","rusty_secrets::errors","The Error type.",null,null],[12,"0","","The kind of the error.",0,null],[4,"ErrorKind","","The kind of an error.",null,null],[13,"Msg","","A convenient variant for String.",1,null],[13,"Io","","",1,null],[13,"IntegerParsingError","","",1,null],[13,"ThresholdTooBig","","",1,null],[13,"ThresholdTooSmall","","",1,null],[13,"SecretTooBig","","",1,null],[13,"InvalidShareCountMax","","",1,null],[13,"InvalidShareCountMin","","",1,null],[13,"EmptySecret","","",1,null],[13,"EmptyShares","","",1,null],[13,"IncompatibleSets","","",1,null],[13,"ShareIdentifierTooBig","","",1,null],[13,"MissingShares","","",1,null],[13,"InvalidSignature","","",1,null],[13,"MissingSignature","","",1,null],[13,"SecretDeserializationError","","",1,null],[13,"ShareParsingError","","",1,null],[13,"ShareParsingErrorEmptyShare","","",1,null],[13,"ShareParsingInvalidShareId","","",1,null],[13,"InvalidSS1Parameters","","",1,null],[13,"InvalidSplitParametersZero","","",1,null],[13,"CannotGenerateRandomNumbers","","",1,null],[13,"DuplicateShareId","","",1,null],[13,"DuplicateShareData","","",1,null],[13,"InconsistentShares","","",1,null],[6,"Result","","Convenient wrapper around `std::Result`.",null,null],[8,"ResultExt","","Additional methods for `Result`, for easy interaction with this crate.",null,null],[10,"chain_err","","If the `Result` is an `Err` then `chain_err` evaluates the closure, which returns some type that can be converted to `ErrorKind`, boxes the original error to store as the cause, then returns a new error containing the original error.",2,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"generics":["error"],"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","",0,{"inputs":[{"name":"errorkind"},{"name":"state"}],"output":{"name":"error"}}],[11,"from_kind","","",0,null],[11,"with_chain","","",0,{"inputs":[{"name":"e"},{"name":"k"}],"output":{"name":"self"}}],[11,"kind","","",0,null],[11,"iter","","",0,{"inputs":[{"name":"self"}],"output":{"name":"iter"}}],[11,"chain_err","","",0,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"name":"self"}}],[11,"backtrace","","",0,{"inputs":[{"name":"self"}],"output":{"generics":["backtrace"],"name":"option"}}],[11,"from_kind","","Constructs an error from a kind, and generates a backtrace.",0,{"inputs":[{"name":"errorkind"}],"output":{"name":"error"}}],[11,"with_chain","","Constructs a chained error from another error and a kind, and generates a backtrace.",0,{"inputs":[{"name":"e"},{"name":"k"}],"output":{"name":"error"}}],[11,"with_boxed_chain","","Construct a chained error from another boxed error and a kind, and generates a backtrace",0,{"inputs":[{"generics":["error"],"name":"box"},{"name":"k"}],"output":{"name":"error"}}],[11,"kind","","Returns the kind of the error.",0,{"inputs":[{"name":"self"}],"output":{"name":"errorkind"}}],[11,"iter","","Iterates over the error chain.",0,{"inputs":[{"name":"self"}],"output":{"name":"iter"}}],[11,"backtrace","","Returns the backtrace associated with this error.",0,{"inputs":[{"name":"self"}],"output":{"generics":["backtrace"],"name":"option"}}],[11,"chain_err","","Extends the error chain with a new entry.",0,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"name":"error"}}],[11,"description","","",0,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"cause","","",0,{"inputs":[{"name":"self"}],"output":{"generics":["error"],"name":"option"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",0,{"inputs":[{"name":"error"}],"output":{"name":"self"}}],[11,"from","","",0,{"inputs":[{"name":"parseinterror"}],"output":{"name":"self"}}],[11,"from","","",0,{"inputs":[{"name":"errorkind"}],"output":{"name":"self"}}],[11,"from","","",0,{"inputs":[{"name":"str"}],"output":{"name":"self"}}],[11,"from","","",0,{"inputs":[{"name":"string"}],"output":{"name":"self"}}],[11,"deref","","",0,null],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","A string describing the error kind.",1,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"from","","",1,{"inputs":[{"name":"str"}],"output":{"name":"self"}}],[11,"from","","",1,{"inputs":[{"name":"string"}],"output":{"name":"self"}}],[11,"from","","",1,{"inputs":[{"name":"error"}],"output":{"name":"self"}}],[0,"sss","rusty_secrets","SSS provides Shamir's secret sharing with raw data.",null,null],[5,"split_secret","rusty_secrets::sss","Performs threshold k-out-of-n Shamir's secret sharing.",null,null],[5,"recover_secret","","Recovers the secret from a k-out-of-n Shamir's secret sharing scheme.",null,null],[0,"wrapped_secrets","rusty_secrets","(Beta) `wrapped_secrets` provides Shamir's secret sharing with a wrapped secret. It currently offers versioning and MIME information about the data.",null,null],[5,"split_secret","rusty_secrets::wrapped_secrets","Performs threshold k-out-of-n Shamir's secret sharing.",null,null],[5,"recover_secret","","Recovers the secret from a k-out-of-n Shamir's secret sharing.",null,null],[0,"proto","rusty_secrets","Protocol buffer definitions.",null,null],[4,"VersionProto","rusty_secrets::proto","",null,null],[13,"INITIAL_RELEASE","","",3,null],[0,"wrapped","","",null,null],[3,"SecretProto","rusty_secrets::proto::wrapped","",null,null],[12,"version","","",4,null],[12,"secret","","",4,null],[12,"mime_type","","",4,null],[3,"ShareProto","","",null,null],[12,"shamir_data","","",5,null],[12,"signature","","",5,null],[12,"proof","","",5,null],[11,"eq","","",4,{"inputs":[{"name":"self"},{"name":"secretproto"}],"output":{"name":"bool"}}],[11,"ne","","",4,{"inputs":[{"name":"self"},{"name":"secretproto"}],"output":{"name":"bool"}}],[11,"clone","","",4,{"inputs":[{"name":"self"}],"output":{"name":"secretproto"}}],[11,"default","","",4,{"inputs":[],"output":{"name":"secretproto"}}],[11,"new","","",4,{"inputs":[],"output":{"name":"secretproto"}}],[11,"default_instance","","",4,{"inputs":[],"output":{"name":"secretproto"}}],[11,"clear_version","","",4,{"inputs":[{"name":"self"}],"output":null}],[11,"set_version","","",4,{"inputs":[{"name":"self"},{"name":"versionproto"}],"output":null}],[11,"get_version","","",4,{"inputs":[{"name":"self"}],"output":{"name":"versionproto"}}],[11,"clear_secret","","",4,{"inputs":[{"name":"self"}],"output":null}],[11,"set_secret","","",4,{"inputs":[{"name":"self"},{"generics":["u8"],"name":"vec"}],"output":null}],[11,"mut_secret","","",4,{"inputs":[{"name":"self"}],"output":{"name":"vec"}}],[11,"take_secret","","",4,{"inputs":[{"name":"self"}],"output":{"generics":["u8"],"name":"vec"}}],[11,"get_secret","","",4,null],[11,"clear_mime_type","","",4,{"inputs":[{"name":"self"}],"output":null}],[11,"set_mime_type","","",4,{"inputs":[{"name":"self"},{"name":"string"}],"output":null}],[11,"mut_mime_type","","",4,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"take_mime_type","","",4,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"get_mime_type","","",4,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"is_initialized","","",4,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"merge_from","","",4,{"inputs":[{"name":"self"},{"name":"codedinputstream"}],"output":{"name":"protobufresult"}}],[11,"compute_size","","",4,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"write_to_with_cached_sizes","","",4,{"inputs":[{"name":"self"},{"name":"codedoutputstream"}],"output":{"name":"protobufresult"}}],[11,"get_cached_size","","",4,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"get_unknown_fields","","",4,{"inputs":[{"name":"self"}],"output":{"name":"unknownfields"}}],[11,"mut_unknown_fields","","",4,{"inputs":[{"name":"self"}],"output":{"name":"unknownfields"}}],[11,"as_any","","",4,{"inputs":[{"name":"self"}],"output":{"name":"any"}}],[11,"as_any_mut","","",4,{"inputs":[{"name":"self"}],"output":{"name":"any"}}],[11,"into_any","","",4,{"inputs":[{"name":"box"}],"output":{"generics":["any"],"name":"box"}}],[11,"descriptor","","",4,{"inputs":[{"name":"self"}],"output":{"name":"messagedescriptor"}}],[11,"new","","",4,{"inputs":[],"output":{"name":"secretproto"}}],[11,"descriptor_static","","",4,{"inputs":[{"generics":["secretproto"],"name":"option"}],"output":{"name":"messagedescriptor"}}],[11,"clear","","",4,{"inputs":[{"name":"self"}],"output":null}],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"as_ref","","",4,{"inputs":[{"name":"self"}],"output":{"name":"protobufvalueref"}}],[11,"eq","","",5,{"inputs":[{"name":"self"},{"name":"shareproto"}],"output":{"name":"bool"}}],[11,"ne","","",5,{"inputs":[{"name":"self"},{"name":"shareproto"}],"output":{"name":"bool"}}],[11,"clone","","",5,{"inputs":[{"name":"self"}],"output":{"name":"shareproto"}}],[11,"default","","",5,{"inputs":[],"output":{"name":"shareproto"}}],[11,"new","","",5,{"inputs":[],"output":{"name":"shareproto"}}],[11,"default_instance","","",5,{"inputs":[],"output":{"name":"shareproto"}}],[11,"clear_shamir_data","","",5,{"inputs":[{"name":"self"}],"output":null}],[11,"set_shamir_data","","",5,{"inputs":[{"name":"self"},{"generics":["u8"],"name":"vec"}],"output":null}],[11,"mut_shamir_data","","",5,{"inputs":[{"name":"self"}],"output":{"name":"vec"}}],[11,"take_shamir_data","","",5,{"inputs":[{"name":"self"}],"output":{"generics":["u8"],"name":"vec"}}],[11,"get_shamir_data","","",5,null],[11,"clear_signature","","",5,{"inputs":[{"name":"self"}],"output":null}],[11,"set_signature","","",5,{"inputs":[{"name":"self"},{"generics":["vec"],"name":"repeatedfield"}],"output":null}],[11,"mut_signature","","",5,{"inputs":[{"name":"self"}],"output":{"name":"repeatedfield"}}],[11,"take_signature","","",5,{"inputs":[{"name":"self"}],"output":{"generics":["vec"],"name":"repeatedfield"}}],[11,"get_signature","","",5,null],[11,"clear_proof","","",5,{"inputs":[{"name":"self"}],"output":null}],[11,"set_proof","","",5,{"inputs":[{"name":"self"},{"generics":["u8"],"name":"vec"}],"output":null}],[11,"mut_proof","","",5,{"inputs":[{"name":"self"}],"output":{"name":"vec"}}],[11,"take_proof","","",5,{"inputs":[{"name":"self"}],"output":{"generics":["u8"],"name":"vec"}}],[11,"get_proof","","",5,null],[11,"is_initialized","","",5,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"merge_from","","",5,{"inputs":[{"name":"self"},{"name":"codedinputstream"}],"output":{"name":"protobufresult"}}],[11,"compute_size","","",5,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"write_to_with_cached_sizes","","",5,{"inputs":[{"name":"self"},{"name":"codedoutputstream"}],"output":{"name":"protobufresult"}}],[11,"get_cached_size","","",5,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"get_unknown_fields","","",5,{"inputs":[{"name":"self"}],"output":{"name":"unknownfields"}}],[11,"mut_unknown_fields","","",5,{"inputs":[{"name":"self"}],"output":{"name":"unknownfields"}}],[11,"as_any","","",5,{"inputs":[{"name":"self"}],"output":{"name":"any"}}],[11,"as_any_mut","","",5,{"inputs":[{"name":"self"}],"output":{"name":"any"}}],[11,"into_any","","",5,{"inputs":[{"name":"box"}],"output":{"generics":["any"],"name":"box"}}],[11,"descriptor","","",5,{"inputs":[{"name":"self"}],"output":{"name":"messagedescriptor"}}],[11,"new","","",5,{"inputs":[],"output":{"name":"shareproto"}}],[11,"descriptor_static","","",5,{"inputs":[{"generics":["shareproto"],"name":"option"}],"output":{"name":"messagedescriptor"}}],[11,"clear","","",5,{"inputs":[{"name":"self"}],"output":null}],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"as_ref","","",5,{"inputs":[{"name":"self"}],"output":{"name":"protobufvalueref"}}],[11,"clone","rusty_secrets::proto","",3,{"inputs":[{"name":"self"}],"output":{"name":"versionproto"}}],[11,"eq","","",3,{"inputs":[{"name":"self"},{"name":"versionproto"}],"output":{"name":"bool"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"hash","","",3,null],[11,"value","","",3,{"inputs":[{"name":"self"}],"output":{"name":"i32"}}],[11,"from_i32","","",3,{"inputs":[{"name":"i32"}],"output":{"generics":["versionproto"],"name":"option"}}],[11,"values","","",3,null],[11,"enum_descriptor_static","","",3,{"inputs":[{"generics":["versionproto"],"name":"option"}],"output":{"name":"enumdescriptor"}}],[11,"default","","",3,{"inputs":[],"output":{"name":"self"}}],[11,"as_ref","","",3,{"inputs":[{"name":"self"}],"output":{"name":"protobufvalueref"}}]],"paths":[[3,"Error"],[4,"ErrorKind"],[8,"ResultExt"],[4,"VersionProto"],[3,"SecretProto"],[3,"ShareProto"]]};
initSearch(searchIndex);
