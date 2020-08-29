/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@vime/core';


interface VimeControlProps {
  
  /** A slash (`/`) seperated string of JS keyboard keys (`KeyboardEvent.key`), that when caught in
a `keydown` event, will trigger a `click` event on the control. */
  keys?: Components.VimeControl["keys"]
  
  /** The `id` attribute of the control. */
  identifier?: Components.VimeControl["identifier"]
  
  /** Whether the control should be displayed or not. */
  hidden?: Components.VimeControl["hidden"]
  
  /** The `aria-label` property of the control. */
  label?: Components.VimeControl["label"]
  
  /** If the control has a popup menu, then this should be the `id` of said menu. Sets the
`aria-controls` property. */
  menu?: Components.VimeControl["menu"]
  
  /** If the control has a popup menu, this indicates whether the menu is open or not. Sets the
`aria-expanded` property. */
  expanded?: Components.VimeControl["expanded"]
  
  /** If the control is a toggle, this indicated whether the control is in a "pressed" state or not.
Sets the `aria-pressed` property. */
  pressed?: Components.VimeControl["pressed"]
  
  /** Scale the size of the control up/down by the amount given. */
  scale?: Components.VimeControl["scale"]
  
  /**  */
  isTouch?: Components.VimeControl["isTouch"]
}

interface VimeControlEvents {
  
  /** Emitted when the user is interacting with the control by focusing, touching or hovering on it. */
  vInteractionChange: Parameters<JSX.VimeControl["onVInteractionChange"]>[0]
}

interface VimeControlSlots {
  default: any
}
  
/* generated by Svelte v3.24.1 */
import {
	SvelteComponent,
	binding_callbacks,
	create_slot,
	detach,
	element,
	init,
	insert,
	listen,
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher, onMount } from "svelte";

function create_fragment(ctx) {
	let vime_control;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*$$slots*/ ctx[13].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[12], null);

	return {
		c() {
			vime_control = element("vime-control");
			if (default_slot) default_slot.c();
			set_custom_element_data(vime_control, "keys", /*keys*/ ctx[0]);
			set_custom_element_data(vime_control, "identifier", /*identifier*/ ctx[1]);
			vime_control.hidden = /*hidden*/ ctx[2];
			set_custom_element_data(vime_control, "label", /*label*/ ctx[3]);
			set_custom_element_data(vime_control, "menu", /*menu*/ ctx[4]);
			set_custom_element_data(vime_control, "expanded", /*expanded*/ ctx[5]);
			set_custom_element_data(vime_control, "pressed", /*pressed*/ ctx[6]);
			set_custom_element_data(vime_control, "scale", /*scale*/ ctx[7]);
			set_custom_element_data(vime_control, "is-touch", /*isTouch*/ ctx[8]);
		},
		m(target, anchor) {
			insert(target, vime_control, anchor);

			if (default_slot) {
				default_slot.m(vime_control, null);
			}

			/*vime_control_binding*/ ctx[14](vime_control);
			current = true;

			if (!mounted) {
				dispose = listen(vime_control, "vInteractionChange", /*onEvent*/ ctx[10]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 4096) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[12], dirty, null, null);
				}
			}

			if (!current || dirty & /*keys*/ 1) {
				set_custom_element_data(vime_control, "keys", /*keys*/ ctx[0]);
			}

			if (!current || dirty & /*identifier*/ 2) {
				set_custom_element_data(vime_control, "identifier", /*identifier*/ ctx[1]);
			}

			if (!current || dirty & /*hidden*/ 4) {
				vime_control.hidden = /*hidden*/ ctx[2];
			}

			if (!current || dirty & /*label*/ 8) {
				set_custom_element_data(vime_control, "label", /*label*/ ctx[3]);
			}

			if (!current || dirty & /*menu*/ 16) {
				set_custom_element_data(vime_control, "menu", /*menu*/ ctx[4]);
			}

			if (!current || dirty & /*expanded*/ 32) {
				set_custom_element_data(vime_control, "expanded", /*expanded*/ ctx[5]);
			}

			if (!current || dirty & /*pressed*/ 64) {
				set_custom_element_data(vime_control, "pressed", /*pressed*/ ctx[6]);
			}

			if (!current || dirty & /*scale*/ 128) {
				set_custom_element_data(vime_control, "scale", /*scale*/ ctx[7]);
			}

			if (!current || dirty & /*isTouch*/ 256) {
				set_custom_element_data(vime_control, "is-touch", /*isTouch*/ ctx[8]);
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(vime_control);
			if (default_slot) default_slot.d(detaching);
			/*vime_control_binding*/ ctx[14](null);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { keys = undefined } = $$props;
	let { identifier = undefined } = $$props;
	let { hidden = undefined } = $$props;
	let { label } = $$props;
	let { menu = undefined } = $$props;
	let { expanded = undefined } = $$props;
	let { pressed = undefined } = $$props;
	let { scale = undefined } = $$props;
	let { isTouch = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(9, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	let { $$slots = {}, $$scope } = $$props;

	function vime_control_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(9, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("keys" in $$props) $$invalidate(0, keys = $$props.keys);
		if ("identifier" in $$props) $$invalidate(1, identifier = $$props.identifier);
		if ("hidden" in $$props) $$invalidate(2, hidden = $$props.hidden);
		if ("label" in $$props) $$invalidate(3, label = $$props.label);
		if ("menu" in $$props) $$invalidate(4, menu = $$props.menu);
		if ("expanded" in $$props) $$invalidate(5, expanded = $$props.expanded);
		if ("pressed" in $$props) $$invalidate(6, pressed = $$props.pressed);
		if ("scale" in $$props) $$invalidate(7, scale = $$props.scale);
		if ("isTouch" in $$props) $$invalidate(8, isTouch = $$props.isTouch);
		if ("$$scope" in $$props) $$invalidate(12, $$scope = $$props.$$scope);
	};

	return [
		keys,
		identifier,
		hidden,
		label,
		menu,
		expanded,
		pressed,
		scale,
		isTouch,
		__ref,
		onEvent,
		getWebComponent,
		$$scope,
		$$slots,
		vime_control_binding
	];
}

class VimeControl extends SvelteComponent {
  $$prop_def: VimeControlProps;
  $$events_def: VimeControlEvents;
  $$slot_def: VimeControlSlots;

  $on<K extends keyof VimeControlEvents>(type: K, callback: (e: VimeControlEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<VimeControlProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			keys: 0,
			identifier: 1,
			hidden: 2,
			label: 3,
			menu: 4,
			expanded: 5,
			pressed: 6,
			scale: 7,
			isTouch: 8,
			getWebComponent: 11
		});
	}

	get getWebComponent(): HTMLVimeControlElement | undefined {
		return this.$$.ctx[11];
	}
}

export default VimeControl;